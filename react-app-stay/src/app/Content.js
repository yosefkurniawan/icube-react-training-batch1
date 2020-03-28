import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import RoomList from './content/RoomList.js'
import Room from './content/Room.js';
import ErrorBoundary from './ErrorBoundary.js';

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
                    <RoomList
                        rooms={props.rooms}
                        keyWordSearch={props.keyWordSearch}
                    />
                </Route>
            </Switch>
        </ErrorBoundary>
    );
}

export default Content;