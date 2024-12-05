// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract DonationContract {
    uint256 public totalDonations;
    address public owner;
    mapping (address => uint) public donations;// mapping para almacenar las donaciones de cada usuario

    event DonationRecived(address indexed donor, uint amount);
    event DonationWithdrawn(address indexed recipient, uint amount);
    constructor() {
        owner = msg.sender; // El propietario del contrato es el que manda la transacción
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }
    function donate() public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        donations[msg.sender] += msg.value;
        totalDonations += msg.value;
        emit DonationRecived(msg.sender, msg.value);
    }
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }  
}