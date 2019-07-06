import React, { Component } from "react";
import tubFunc from "../contractFunc";

const tub = new tubFunc()

class Tip extends Component {
  constructor() {
    super();
    this.state = {};
  
  }

  componentDidMount(){
    tub.initialized()
  }

  sendTip = async (e) => {
    e.preventDefault();
    let tx = await tub.tip("0x06854f66338A7F9FD597E790A12F9E930D4Bd88B");
    console.log(tx)
    return tx;
  };

  render() {
    if (!window.web3) {
      return (
        <div>Metamask is required to post videos and send tips.</div>
      )
    } else {
      return (
        <form onSubmit={this.sendTip}>
          <input name="tipAmount" />
          <button>Tip me.</button>
        </form>
      )
    }
  }
}

export default Tip;
