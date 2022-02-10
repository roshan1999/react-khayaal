import React from 'react';
import './Navbar.css'
import FilledButton from '../../Components/FilledButton/FilledButton';

export default function Navbar() {
    return (
        <div className='nav'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Parent Organisation</a></li>
                <li><a href="#">Activities</a></li>
                <li><a href="#">Members</a></li>
                <li><a href="#">Join Us</a></li>
                <FilledButton>Donate Now</FilledButton>
            </ul>
        </div>
    );
}
