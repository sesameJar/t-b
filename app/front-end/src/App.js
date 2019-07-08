import React from "react";
import { getVideos } from "./components/api";
import Video from "./components/Video";
import AddVideoForm from "./components/AddVideoForm";
import Player from './components/Player'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { addVideo } from "./components/api";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

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
        <AppBar  position="static" color="default">
          <Toolbar variant="dense">
            <Typography className="title" variant="h6" color="inherit">
              tüb
            </Typography>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Container maxWidth="md">
          <AddVideoForm submitVideo={this.submitVideo} />
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
        </Container>
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
    let publicKey = await window.web3.eth.accounts[0];
    data.publicKey = publicKey;
    let primaryKey = await addVideo(data);
    primaryKey = primaryKey.primaryKey
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
