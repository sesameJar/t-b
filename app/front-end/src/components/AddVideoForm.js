import React, {Component} from 'react'

class AddVideoForm extends Component {
    constructor(){
        super()
        this.state = {}
    }

    submitVideo = async (e) => {
        e.preventDefault();
        // let title = e.target.youtubeLink
    }

    render(){
       return(<form method="post" onSubmit={this.submitVideo}>
           <input type="text" name="youtubeLink" placeholder="Youtube Link..." />
           <input type="text" name="title" placeholder="Video Title..." />
           <input type="text" name="publicKey" disabled /> 
           <button>Submit</button>          
       </form>) 
    }
}

export default AddVideoForm;