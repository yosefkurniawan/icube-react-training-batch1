import React from "react";

class Person extends React.Component {
    render() {
        return (
            <div className="Person">
                <h2>Person</h2>
                <span>Name: {this.props.data.name}</span>
                <br />
                <span>Role: {this.props.data.role}</span>
            </div>
        );
    }
}

export default Person;