import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TopicList from './topic-list';
import Topic from './topic';
import NotFound from '../not-found';

const Topics = () => {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route exact path={`${match.url}/:topicid`}>
                    <Topic />
                </Route>
                <Route exact path={`${match.url}`}>
                    <TopicList />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
};

export default Topics;
