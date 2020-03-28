import React from 'react';
import { MyProvider } from './my-provider';
import Community from "./components/community";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <h1>App!</h1>
                    <Community />
                </div>
            </MyProvider>
        );
    }
}


export default App;
