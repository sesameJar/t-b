pragma solidity ^0.5.0;

contract t_b {
    event tipMade(address tipper, address channel, uint256 amount);
    event withdrawTips(address channelOwner, uint256 amount);
    // Address is the channel owner's public address
    mapping (address => uint256) tipjars;
    
    function tip(address _channel) public payable {
        require(msg.value > 0 , "NO value."); // wastes some gas, we also check it on the front end
        tipjars[_channel] += msg.value;
        emit tipMade(msg.sender, _channel, msg.value);
    }
    
    function checkBalance() public view returns(uint256) {
        return tipjars[msg.sender];
    }
    
    function withdraw() public {
        require(tipjars[msg.sender] > 0);
        uint256 amount = tipjars[msg.sender];
        tipjars[msg.sender] -= amount;
        msg.sender.transfer(amount);
        emit withdrawTips(msg.sender, amount);
    }
}
