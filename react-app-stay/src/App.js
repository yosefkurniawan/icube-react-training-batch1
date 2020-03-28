import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import RoomData from './Data.js';
import Header from './app/Header.js';
import './App.css';

const Content = lazy(() => import('./app/Content'));

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
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Content className="App-content" rooms={rooms} keyWordSearch={this.state.keyWordSearch} />
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
