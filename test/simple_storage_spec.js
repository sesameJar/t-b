/*global contract, config, it, assert*/
const T_b = require('Embark/contracts/T_b');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "T_b": {
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("T_b", function () {
 it("contract has deployed", async ()=> {
   let address = await T_b.options.address
   assert.ok(address)
 })
 it("")
  
});
