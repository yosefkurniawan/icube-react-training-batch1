import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const TopicList = () => {
    const match = useRouteMatch();
    return (
        <>
            <h2>Topic List</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/topic-1`}>Topic 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topic-2`}>Topic 2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topic-3`}>Topic 3</Link>
                </li>
                <li>
                    <Link to={`${match.url}/topic-4`}>Topic 4</Link>
                </li>
            </ul>
        </>
    );
};

export default TopicList;
