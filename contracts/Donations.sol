//SPDX-License-Identifier: MIT
pragma solidity 0.8.27;
//@title Donations Contract to accept and track donations
// @Author: Hans Garcia
/**
 * @title DonationContract
 * @dev A simple contract to accept and track donations.
 */
contract DonationsContract {
    /// @notice Emitted when a donation is made.
    /// @param donor The address of the donor.
    /// @param amount The amount donated in wei.
    event DonationReceived(address indexed donor, uint256 amount);

    /// @notice Emitted when funds are withdrawn by the owner.
    /// @param owner The address of the owner withdrawing funds.
    /// @param amount The amount withdrawn in wei.
    event FundsWithdrawn(address indexed owner, uint256 amount);

    /// @notice The owner of the contract.
    address public owner;

    /// @notice The total donations received.
    uint256 public totalDonations;

    /**
     * @dev Initializes the contract setting the deployer as the owner.
     */
    constructor() {
        owner = msg.sender;
    }

    /**
     * @notice Allows anyone to send a donation to the contract.
     * @dev Emits a DonationReceived event.
     */
    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than zero.");
        totalDonations += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }

    /**
     * @notice Allows the owner to withdraw all funds from the contract.
     * @dev Emits a FundsWithdrawn event.
     */
    function withdrawFunds() external {
        require(msg.sender == owner, "Only the owner can withdraw funds.");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available for withdrawal.");
        (bool success, ) = owner.call{value: balance}("");
        require(success, "Withdrawal failed.");
        emit FundsWithdrawn(owner, balance);
    }

    /**
     * @notice Returns the balance of the contract.
     * @return The current balance of the contract in wei.
     */
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}