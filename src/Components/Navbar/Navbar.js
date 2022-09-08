import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar(){
 return(
    <div className='navbar'>
    <h1>Mi Directorio</h1>
    <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <li>Contáctame</li>
    </ul>
    </div>
 )
}