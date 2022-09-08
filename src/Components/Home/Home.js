import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home(){
 return (
    <div>
    <h2>Contactos</h2>
    <Link to="/contacts">
    <button>Mi directorio</button>
    </Link>
    </div>
 )
}