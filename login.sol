pragma solidity >=0.4.21 <0.6.0;

contract Login {

event LoginAttempt(address sender, string challenge);

function login(string memory challenge) public{

emit LoginAttempt(msg.sender, challenge);

}

}