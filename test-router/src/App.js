import React from "react";
import "./App.css";
import {
    BrowserRouter as Router
} from "react-router-dom";
import Header from "./components/header";
import Page from "./components/pages";
import Footer from "./components/footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Page />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
