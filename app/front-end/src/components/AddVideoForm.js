import React, { Component } from 'react'

class AddVideoForm extends Component {

  render() {
    if (!window.web3) {
      return (
        <div>Metamask is required to post videos and send tips.</div>
      )
    } else {
      return (
        <form onSubmit={this.props.submitVideo}>
          <input type="text" name="youtubeLink" placeholder="Youtube Link..." />
          <input type="text" name="title" placeholder="Video Title..." />
          <button>Submit</button>
        </form>
      )
    }
  }
}

export default AddVideoForm;