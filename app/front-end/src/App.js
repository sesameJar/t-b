import React from 'react';
import getVideos from './components/api'
import Video from './components/Video'
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  async componentDidMount(){
    this.setState({videos: await getVideos()})
  }

  render() {
    let videos = this.state.videos
    console.log(videos)
    return (
      <div className="App">
        <header>
          <h1>tüb</h1>
          <addVideoForm />
        </header>
        <div className="VideoList">
          {videos.map(v => {
            return <Video
              key={v.youtubeLink}
              link={v.youtubeLink}
              title={v.title}
              prKey={v.primaryKey}
            />
          })}
        </div>
      </div>
    )
  }
}

export default App;
