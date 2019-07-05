import React, {Component} from 'react'
import youtubeParser from './util'


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        let thumbUrl = `https://img.youtube.com/vi/${youtubeParser(this.props.link)}/default.jpg`
        return (
            <figure>
              <a href={this.props.link}>
                <img src={thumbUrl} alt={this.props.title} />
                <figcaption>{this.props.title}</figcaption>
              </a>
            </figure>
        )
    }
}

export default Video