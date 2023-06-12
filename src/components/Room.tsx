// @flow 
import React, {useState, useEffect} from 'react';
import axios from 'axios';
type Props = {
    
};
interface RoomModel{
    name: string;
}
export const Room = (props: Props) => {
    const [rooms, setRooms] = useState<RoomModel[]>([]);
    
    useEffect(() => {
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