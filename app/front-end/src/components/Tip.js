import React, { Component } from "react";
import TubFunctions from "../contractFunc";

class Tip extends Component {
  constructor() {
    super();
    this.state = {};
  }

  sendTip = async e => {
    e.preventDefault();
    // let tx = await TubFunctions.tip("0x06854f66338A7F9FD597E790A12F9E930D4Bd88B");
    // console.log(tx)
    // return tx;

    let balance = await TubFunctions.checkBalance()
    console.log(balance)
  };

  render() {
    return (
      <form onSubmit={this.sendTip}>
        <input name="tipAmount" />
        <button>Tip me.</button>
      </form>
    );
  }
}

export default Tip;
