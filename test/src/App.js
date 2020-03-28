import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./button";

function App() {
    const [counter, setCounter] = useState(0);
    const updateCounter = (num) => {
        setCounter(counter + num);
    }

    return (
        <div className="App">
            <div>Counter: <span id="counter">{counter}</span></div>
            <div>
                <Button increment={1} handleIncrement={updateCounter} />
                <Button increment={5} handleIncrement={updateCounter} />
                <Button increment={10} handleIncrement={updateCounter} />
                <Button increment={100} handleIncrement={updateCounter} />
            </div>
        </div>
    );
}


export default App;
