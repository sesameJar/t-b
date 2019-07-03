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
  it("contract has deployed", async () => {
    let address = await T_b.options.address
    assert.ok(address)
  })

  it("Withdrawal from empty tipjar", async () => {
    try {
      await T_b.methods.withdraw().send();
      assert.ok(false)
    }
    catch (error) {
      assert.ok(error.message.includes("The tipjar is empty"))
    }
  })

  it("Withdrawal from non-empty tipjar", async () => {
    await T_b.methods.tip(accounts[0]).send({ value: 1000000000000000 })
    let accountBalance = await web3.eth.getBalance(accounts[0])
    let tipJarBalance = await T_b.methods.checkBalance().call()
    assert.ok(tipJarBalance == 1000000000000000)
    await T_b.methods.withdraw().send();
    assert (await web3.eth.getBalance(accounts[0]) > accountBalance)
    tipJarBalance = await T_b.methods.checkBalance().call()
    assert.ok(tipJarBalance == 0)
  })
});
