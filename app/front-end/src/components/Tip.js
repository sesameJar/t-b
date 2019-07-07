import React, { Component } from "react";
import tubFunc from "../contractFunc";

const tub = new tubFunc()

class Tip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount : '1'
    };
  }

  async componentDidMount(){
    tub.initialized()
    await window.ethereum.enable();
    let publicKey = window.web3.eth.accounts[0];
    this.setState({publicKey})
  }

  sendTip = async (e) => {
    e.preventDefault();
    let tx = await tub.tip(this.props.publicKey.toString(),e.target.tipAmount.value );
    console.log(tx)
    return tx;
  };

  render() {
    if (!window.web3) {
      return (
        <div>Not fully loaded</div>
      )
    }
    else if(!this.props.publicKey) {
      return(<div>Loading ...</div>)
    }
     else {
      return (
        <form onSubmit={this.sendTip}>
          <input name="tipAmount" placeholder="in gwei..."/>
          <button>Tip me.</button>
        </form>
      )
    }
  }
}

export default Tip;
