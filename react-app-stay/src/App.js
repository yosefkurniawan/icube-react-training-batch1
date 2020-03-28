import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import RoomData from './Data.js';
import Header from './app/Header.js';
import Content from './app/Content.js';
import './App.css';

const rooms = RoomData();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWordSearch: ""
    }
  }
  handleOnSearch = (keyword) => {
    this.setState({
      keyWordSearch: keyword
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header className="App-header" rooms={rooms} onSearch={this.handleOnSearch} />
          <Content className="App-content" rooms={rooms} keyWordSearch={this.state.keyWordSearch} />
        </Router>
      </div>
    );
  }
}

export default App;
