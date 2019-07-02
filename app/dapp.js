import React from 'react';
import ReactDOM from 'react-dom';
import EmbarkJS from 'Embark/EmbarkJS'; 

import './dapp.css';

class App extends React.Component {
  render() { 
    return (<div>
      <h3>Yo Dima.</h3>
    </div>);
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));
