import React from "react";
import Person from "./person";
import { MyContext } from "../my-provider";

class Family extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div className="Family">
                        <h2>Family</h2>

                        {context.state.persons.map((person,i) => (
                            <Person data={person} key={i} />
                        ))}
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Family;