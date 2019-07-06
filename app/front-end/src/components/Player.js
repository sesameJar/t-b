import React, { Component } from 'react'

class Player extends Component {

    render() {
        const {match:{params}}= this.props
        return (
            <div>
                VideoPlayerComponent
                <p>Playing video number : {params.primaryKey}</p>
            </div>
        )
    }
}

export default Player
