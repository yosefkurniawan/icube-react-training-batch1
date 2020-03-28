import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Topic = () => {
    const { topicid } = useParams();
    return (
        <>
            <h2>{topicid}</h2>
            <p>
                Aliqua minim eiusmod sunt qui anim pariatur amet incididunt
                pariatur. Minim quis magna ad esse eiusmod ad aliquip nulla.
                Exercitation occaecat officia sunt in. Consectetur labore
                excepteur dolore reprehenderit adipisicing nisi consequat mollit
                exercitation fugiat. Sit enim excepteur officia sint.
            </p>
            <p>
                Aliqua minim eiusmod sunt qui anim pariatur amet incididunt
                pariatur. Minim quis magna ad esse eiusmod ad aliquip nulla.
                Exercitation occaecat officia sunt in. Consectetur labore
                excepteur dolore reprehenderit adipisicing nisi consequat mollit
                exercitation fugiat. Sit enim excepteur officia sint.
            </p>
            <Link to="/topics">{`<< Back`}</Link>
        </>
    );
};

export default Topic;
