import React, { Component } from 'react'
import {getVideo} from './api'
import Tip from './Tip'
import tubFunc from '../contractFunc'

const tub = new tubFunc()

class Player extends Component {
    constructor(props){
        super(props)
        this.state={
            video : {},
            youtubeID : ''
        }
    }

    async componentDidMount(){
        tub.initialized()
        const {match:{params}}= this.props
        this.setState({video :await  getVideo(params.primaryKey) })
        console.log(this.state.video)
        const youtubeLink = this.state.video.youtubeLink
        this.setState({youtubeID : youtubeLink.substring(youtubeLink.lastIndexOf('=')+1)})
        console.log(this.state.youtubeID)
    }

     checkBalance = async () => {
        console.log(await tub.checkBalance())
    }

    render() {
        const embedVideoSrc = `https://www.youtube.com/embed/${this.state.youtubeID}`
        return (
            <div>
                <div className=''>
                    <iframe src={embedVideoSrc} allowFullScreen title='Video player'/>
                </div>
                <div className=''>
                    <h4 className=''>{this.state.video.title}</h4>
                    <Tip publicKey={this.state.video.publicKey}/>
                    <button onClick={this.checkBalance}>Check balance</button>
                </div>
            </div>
        )
    }
}

export default Player
