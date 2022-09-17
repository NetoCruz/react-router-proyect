import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home(){
 return (
    <div className='contacts'>
    <h2>Contactos</h2>
    <Link to="/contacts" className='cardbutton'>
    Mi directorio
    </Link>
    </div>
 )
}