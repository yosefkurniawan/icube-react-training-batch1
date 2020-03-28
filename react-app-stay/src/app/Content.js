import React, { Suspense, lazy } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Room from './content/Room.js';
import ErrorBoundary from './ErrorBoundary.js';
import ListLoader from './loader/list-loader.js';

const RoomList = lazy(() => import('./content/RoomList'));

function Content(props) {
    return (
        <ErrorBoundary>
            <Switch>
                <Route path="/add">
                    <h2>Add Room</h2>
                </Route>
                <Route path="/room/:roomid">
                    <Room />
                </Route>
                <Route path="/">
                    <Suspense fallback={<ListLoader />}>
                        <RoomList
                            rooms={props.rooms}
                            keyWordSearch={props.keyWordSearch}
                        />
                    </Suspense>
                </Route>
            </Switch>
        </ErrorBoundary>
    );
}

export default Content;