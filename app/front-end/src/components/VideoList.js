import React from 'react'
import getAllVideos from './api.js'

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
          return <div><a href={v.youtubeLink}>{v.title}</a></div>
        })}
      </div>
    )
  }
}

export default VideoList