import React, {Component} from 'react'
import {addVideo} from './api'


class AddVideoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    submitVideo = async (e) => {
        e.preventDefault();
        let data = {
            youtubeLink : e.target.youtubeLink.value,
            title :  e.target.title.value,
        
        }
        await window.ethereum.enable()
        let publicKey = window.web3.eth.accounts[0]
        //console.log(publicKey)
        data.publicKey = publicKey
        let primaryKey =await addVideo(data)
        //console.log(primaryKey)
    }
    render(){
       return(<form onSubmit={this.submitVideo.bind(this)}>
           <input type="text" name="youtubeLink" placeholder="Youtube Link..." />
           <input type="text" name="title" placeholder="Video Title..." />
           <button>Submit</button>          
       </form>) 
    }
}

export default AddVideoForm;