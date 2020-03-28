import React from 'react';
import {
    Link
} from "react-router-dom";

function RoomItem(props) {
    const room = props.room;
    return (
        <li key={room.name}>
            <span className="room-img-wrapper"><Link to={`/room/${props.room.id}`}><img src={props.room.img} alt={room.name} /></Link></span>
            <span className="room-name">{props.room.name}</span>
            <br/>
            <Link to={`/room/${props.room.id}`} className="view-more">View Detail</Link>
        </li>
    )
}

export default RoomItem;