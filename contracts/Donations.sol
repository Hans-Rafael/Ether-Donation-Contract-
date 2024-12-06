//SPDX-License-Identifier: MIT
//@title Donations Contract
// @Author: Hans Garcia
pragma solidity 0.8.27;

contract Donations {
    mapping (address => uint) public donations;
    uint public totalDonations;

    //Funcion para donar
    function donate()external payable {
        require(msg.value > 0, "Must send ETH");
        donations[msg.sender] += msg.value;
        totalDonations += msg.value;
        }

        //funcion para ver el total de donaciones
        function getTotalDonations() external view returns (uint) {
            return totalDonations;
        }
}