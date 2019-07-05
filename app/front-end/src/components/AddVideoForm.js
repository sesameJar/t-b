import React, { Component } from 'react'
import { addVideo } from './api'

class AddVideoForm extends Component {
  submitVideo = async (e) => {
    e.preventDefault();
    let data = {
      youtubeLink: e.target.youtubeLink.value,
      title: e.target.title.value,
    }
    await window.ethereum.enable()
    let publicKey = window.web3.eth.accounts[0]
    data.publicKey = publicKey
    await addVideo(data)
  }
  render() {
    if (!window.web3) {
      return (
        <div>Metamask is required to post videos and send tips.</div>
      )
    } else {
      return (
        <form onSubmit={this.submitVideo.bind(this)}>
          <input type="text" name="youtubeLink" placeholder="Youtube Link..." />
          <input type="text" name="title" placeholder="Video Title..." />
          <button>Submit</button>
        </form>
      )
    }
  }
}

export default AddVideoForm;