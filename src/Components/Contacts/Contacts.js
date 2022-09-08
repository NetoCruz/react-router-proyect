import React from 'react';
import "./Contacts.css"
import Data from "../../Contacts"

export default function Contacts(){
    const cards = Data.map(item =>{
        return(
          
        <div className='card'>
           
           <p>{item.name}</p>
           <p>{item.tel}</p>
           <p>{item.status}</p>
           <p>{item.location}</p>
           <button>Ver perfil</button>
           
            
          </div>
        )
       })
 return(

    <>
    <h1>Mis Contactos</h1>
    {cards}
    </>
 )
}