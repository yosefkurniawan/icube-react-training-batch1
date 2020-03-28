import React from "react";

const MyContext = React.createContext();

class MyProvider extends React.Component {
    constructor() {
        super();

        this.state = {
            persons: [
                {
                    name: "Reza Fauzan",
                    role: "Bapak",
                    active: true
                },
                {
                    name: "Vincen",
                    role: "Anak",
                    active: true
                },
                {
                    name: "Sunar",
                    role: "Cucu",
                    active: true
                },
                {
                    name: "Fiko",
                    role: "Ponakan",
                    active: true
                },
                {
                    name: "Lippo",
                    role: "Simbah",
                    active: true
                }
            ]
        };
    }

    render() {
        return (
            <MyContext.Provider value={{ state: this.state }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export {
    MyContext,
    MyProvider
}