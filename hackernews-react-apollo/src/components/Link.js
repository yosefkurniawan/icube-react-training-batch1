import React, { Component } from "react";

class Link extends Component {
    render() {
        return (
            <li>
                {this.props.link.description} ({this.props.link.url})
            </li>
        );
    }
}

export default Link;
