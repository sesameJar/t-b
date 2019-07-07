import React, {Component} from 'react'
import youtubeParser from './util'
import {Link} from 'react-router-dom'


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
          link : `/video/${this.props.prKey}`
        };
    }

    render() {
        let thumbUrl = `https://img.youtube.com/vi/${youtubeParser(this.props.link)}/default.jpg`
        return (
            <figure>
              <Link to={this.state.link}>
                <img src={thumbUrl} alt={this.props.title} />
                <figcaption>{this.props.title}</figcaption>
              </Link>
            </figure>
        )
    }
}

export default Video