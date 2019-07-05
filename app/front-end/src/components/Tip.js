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
       return(<button>Tip me!</button>) 
    }
}

export default AddVideoForm;