import React from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';
import RoomData from '../../Data.js';

function getRoomById(id) {
    const roomData = RoomData();
    const resultIndex = roomData.findIndex(room => room.id === parseInt(id));
    const result = roomData[resultIndex];

    return result;
}

function Room(props) {
    const { roomid } = useParams();
    const currentRoom = getRoomById(roomid);

    return (
        <div>
            <div className="room-img"><img src={currentRoom.img} alt={currentRoom.name} style={{width:'100%'}} /></div>
            <h1 className="room-name">{currentRoom.name}</h1>
            <div className="room-description">{currentRoom.description}</div>
            <br/>
            <Link to="/">Kembali ke List Room</Link>
        </div>
    )
}

export default Room;