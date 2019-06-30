pragma solidity ^0.5.0;

contract Dapp1 {
    mapping (address => uint256) tipjars;
    
    function tip(address _channel) public payable {
        tipjars[_channel] = msg.value;
    }
    
    function checkBalance() public view returns(uint256) {
        return tipjars[msg.sender];
    }
    
    function withdraw() public {
        require(tipjars[msg.sender] > 0);
        uint256 amount = tipjars[msg.sender];
        tipjars[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }
}
