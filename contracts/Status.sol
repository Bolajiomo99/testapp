pragma solidity ^0.4.8;

contract Status {
	mapping (address => string) statuses;


	function updateStatus(string status) {
		statuses[msg.sender] = status;
	}

	function getStatus(address addr) returns(string) {
    	return statuses[addr];
  }
}
