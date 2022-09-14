import React,{useState} from 'react';
import "./Contacts.css"
// import Data from "../../Contacts"
import { Link } from 'react-router-dom'; 



export default function Contacts({data}){
    const [inputText, setInputText] = useState("")
    let inputHandler = (e) => {
      
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

   //  const cards = data.map(item =>{
   //      return(
   //       <>
   //      <div className='card'>
           
   //         <p>{item.name}</p>
   //         <p>{item.tel}</p>
   //         <p>{item.status}</p>
   //         <p>{item.location}</p>
   //         <Link to={`/profile/${item.id}`}>
   //         <button>Ver perfil</button>
   //         </Link>
           
            
   //        </div>
          
   //        </> 
   //      )
   //     })

   const filteredData = data.filter((el) => {
      //if no input the return the original
      if (inputText === '') {
          return el;
      }
      //return the item which contains the user input
      else {
          return el.name.toLowerCase().includes(inputText)
      }
  })
 return(

    <>
    <h1>Mis Contactos</h1>
    <div className="search">
        <input type="search"
               placeholder='Buscar contacto por nombre'  
               onChange={inputHandler} 
         >
        </input>
      </div>
    {/* {cards} */}
    <ul>
            {filteredData.map((item) => (
         <div className='card'>
           <div className='card--item'>
               <p className='card--item--title'>name</p>
               <p>{item.name}</p>
           </div>
          <div className='card--item'>
          <p className='card--item--title'>telephone</p>
           <p>{item.tel}</p>
          </div>
          <div className='card--item'>
          <p className='card--item--title'>status</p>
           <p>{item.status}</p>
          </div>
          <div className='card--item'>
          <p className='card--item--title'>location</p>
           <p>{item.location}</p>
          </div>
           
           
           
           <Link to={`/profile/${item.id}`}>
           <button>Ver perfil</button>
           </Link>
           
            
           </div>
            ))}
        </ul>
    </>
 )
}