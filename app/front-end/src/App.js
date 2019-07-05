import React from 'react';
import {getVideos} from './components/api'
import Video from './components/Video'
import AddVideoForm from './components/AddVideoForm'
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  async componentDidMount(){
    await window.ethereum.enable()
    console.log(await window.web3.eth.accounts[0])
    this.setState({videos: await getVideos()})
  }
  render() {
    let videos = this.state.videos
    console.log(videos)
    return (
      <div className="App">
        <header>
          <h1>tüb</h1>
          <AddVideoForm submitVideo={this.submitVideo}/>
        </header>
        <div className="VideoList">
          {videos.map(v => {
            return <Video
              key={v.primaryKey}
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
