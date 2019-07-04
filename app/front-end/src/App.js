import React from 'react';
import './App.css';
import VideoList from './components/VideoList.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>tüb</h1>
          <button>Post Video</button>
        </header>
        <VideoList />
      </div>
    )
  }
}

export default App;
