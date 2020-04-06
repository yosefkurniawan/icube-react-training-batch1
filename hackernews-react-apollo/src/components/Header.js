import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">Hacker News</div>
                    <Link to="/" className="ml1 no-underline black">
                        Link List
                    </Link>
                    <div className="ml1">|</div>
                    <Link to="/create" className="ml1 no-underline black">
                        Add New Link
                    </Link>
                    <div className="ml1">|</div>
                    <Link to="/search" className="ml1 no-underline black">
                        Search
                    </Link>
                    <div className="ml1">|</div>
                    <Link to="/login" className="ml1 no-underline black">
                        Login
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
