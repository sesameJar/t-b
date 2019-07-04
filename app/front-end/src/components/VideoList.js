import React from 'react'
import getAllVideos from './api.js'
import youtubeParser from './util.js'

function VideoThumbAndTitle(props) {
  let thumbUrl = `https://img.youtube.com/vi/${youtubeParser(props.link)}/default.jpg`
  return (
    <figure>
      <a href={props.link}>
        <img src={thumbUrl} alt={props.title} />
        <figcaption>{props.title}</figcaption>
      </a>
    </figure>
  )
}

class VideoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
    this.getVideos()
  }

  async getVideos() {
    this.setState(await getAllVideos())
  }

  render() {
    let videos = this.state.videos
    return (
      <div className="VideoList">
        {videos.map(v => {
          return <VideoThumbAndTitle
            key={v.youtubeLink}
            link={v.youtubeLink}
            title={v.title}
          />
        })}
      </div>
    )
  }
}

export default VideoList