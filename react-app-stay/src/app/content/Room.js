import React from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';
import RoomData from '../../Data.js';
import ImageLoader from '../loader/image-loader.js';
import Image from "react-shimmer";

function getRoomById(id) {
    const roomData = RoomData();
    const resultIndex = roomData.findIndex(room => room.id === parseInt(id));
    const result = roomData[resultIndex];

    return result;
}

function Room(props) {
    const { roomid } = useParams();

    if (roomid <= -1) {
        throw new Error("I crashed!");
    }

    const currentRoom = getRoomById(roomid);

    return (
        <div>
            <div className="room-img">
                <Image
                    src={currentRoom.img}
                    fallback={<ImageLoader/>}
                />
            </div>
            <h1 className="room-name">{currentRoom.name}</h1>
            <div className="room-description">{currentRoom.description}</div>
            <br />
            <Link to="/">Kembali ke List Room</Link>
        </div>
    );
}

export default Room;