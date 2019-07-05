import React from 'react';
import { getVideos } from './components/api'
import Video from './components/Video'
import AddVideoForm from './components/AddVideoForm'
import Tip from './components/Tip'
import './App.css';
import { addVideo } from './components/api'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }
  submitVideo = async (e) => {
    e.preventDefault();
    let data = {
      youtubeLink: e.target.youtubeLink.value,
      title: e.target.title.value,
    }
    await window.ethereum.enable()
    let publicKey = window.web3.eth.accounts[0]
    data.publicKey = publicKey
    let primaryKey = await addVideo(data)
    let videoList = this.state.videos
    videoList.unshift({
      primaryKey: primaryKey, youtubeLink: data.youtubeLink, title: data.title
    })
    this.setState({ videos: videoList })
  }
  async componentDidMount() {
    this.setState({ videos: await getVideos() })
  }

  render() {
    let videos = this.state.videos
    return (
      <div className="App">
        <header>
          <h1>tüb</h1>
<<<<<<< HEAD
          <AddVideoForm submitVideo={this.submitVideo}/>
          <Tip />
=======
          <AddVideoForm submitVideo={this.submitVideo} />
>>>>>>> backend-tip
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
