// @flow 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
type Props = {};

interface RoomModel{
    name: string;
}

let countRender = 0;
export const Room = (props: Props) => {
    const [rooms, setRooms] = useState<RoomModel[]>([]);

    console.log(++countRender);
    
    useEffect (() => {
        axios.get('http://localhost:3000/rooms').then((response) => {
            setRooms(response.data);
         });
    }, []);
    
  
    return (
        <div>
            <h1>Rooms</h1>
            <ul>
            {rooms.map((room) => (
                <li>{room.name}</li>
            ))}
        </ul>
    </div>
);
};