// @flow 
import * as React from 'react';
import axios from 'axios';
type Props = {
    
};
export const Room = (props: Props) => {
    axios.get('http://localhost:3000/rooms')
    .then(response => console.log(response))


    return (
        <div>
            <h1>Rooms</h1>
            <ul>
                <li>Room 1</li>
                <li>Room 2</li>
            </ul>
        </div>
    );
};