import React from 'react';
import RoomItem from './RoomItem.js';

function RoomList(props) {
    const filteredRooms = [];
    const keyword = props.keyWordSearch;

    props.rooms.forEach((room) => {
        if (room.name.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
            return;
        }

        filteredRooms.push(<RoomItem room={room} key={room.name} />);
    })
    return (
        <div className="App-content">
            <ul className="room-list">
                {filteredRooms}
            </ul>
        </div>
    )
}

export default RoomList;