// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Greeter {
    string greetings;

    constructor(string memory initialGreeting) {
        // setting greeting value while deploying
        greetings = initialGreeting;
    }

    // function to get the value of greeting
    function greet() public view returns (string memory) {
        return greetings;
    }

    // function to set the value of greeting
    function setGreet(string memory newGreet) public {
        greetings = newGreet;
    }
}
