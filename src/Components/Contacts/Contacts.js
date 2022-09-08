import React from 'react';
import "./Contacts.css"
import Data from "../../Contacts"
import { Link } from 'react-router-dom'; 



export default function Contacts(){
    
    const cards = Data.map(item =>{
        return(
         <>
        <div className='card'>
           
           <p>{item.name}</p>
           <p>{item.tel}</p>
           <p>{item.status}</p>
           <p>{item.location}</p>
           <Link to={`/profile/${item.id}`}>
           <button>Ver perfil</button>
           </Link>
           
            
          </div>
          
          </> 
        )
       })
 return(

    <>
    <h1>Mis Contactos</h1>
    {cards}
    </>
 )
}