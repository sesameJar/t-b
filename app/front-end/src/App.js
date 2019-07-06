import React from "react";
import { getVideos } from "./components/api";
import Video from "./components/Video";
import AddVideoForm from "./components/AddVideoForm";
import Player from './components/Player'
import Tip from "./components/Tip";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { addVideo } from "./components/api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  async componentDidMount() {
    this.setState({ videos: await getVideos() });
  }

  RenderApp = () => {
    let videos = this.state.videos;
    return (
      <div className="App">
        <header>
          <h1>tüb</h1>
          <AddVideoForm submitVideo={this.submitVideo} />
          <Tip />
        </header>
        <div className="VideoList">
          {videos.map(v => {
            return (
              <Video
                key={v.primaryKey}
                link={v.youtubeLink}
                title={v.title}
                prKey={v.primaryKey}
              />
            );
          })}
        </div>
      </div>
    );
  };

  submitVideo = async e => {
    e.preventDefault();
    let data = {
      youtubeLink: e.target.youtubeLink.value,
      title: e.target.title.value
    };

    await window.ethereum.enable();
    let publicKey = window.web3.eth.accounts[0];
    data.publicKey = publicKey;
    let primaryKey = await addVideo(data);
    let videoList = this.state.videos;
    videoList.unshift({
      primaryKey: primaryKey,
      youtubeLink: data.youtubeLink,
      title: data.title
    });
    this.setState({ videos: videoList });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={this.RenderApp} />
          <Route path="/video/:primaryKey?" component={Player} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
