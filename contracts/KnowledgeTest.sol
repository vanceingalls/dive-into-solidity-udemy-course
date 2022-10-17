//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract KnowledgeTest {
    string[] public tokens = ["BTC", "ETH"];
    address[] public players;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function changeTokens() external {
        string[] memory t = tokens;
        t[0] = "VET";
        tokens[0] = "VET";
    }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function transferAll(address payable destination) external {
        require(msg.sender == owner, "ONLY_OWNER");
        destination.transfer(address(this).balance);
        // DeclarationError: Undeclared identifier. "getBalance" is not (or not yet) visible at this point.
        // (bool result, ) = destination.call{value: getBalance()}("");
    }

    function start() public {
        players.push(msg.sender);
    }

    function concatenate(string calldata a, string calldata b)
        external
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(a, b));
    }
}
