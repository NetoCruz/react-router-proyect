import React from 'react';
import "./Profile.css"
// import Data from "../../Contacts"
import { useParams } from 'react-router-dom';





  export default function Profile({data}){
      const {userId} = useParams()
//     const cards = Data.filter((item) => item.id === userId )
//                        .map((item)=>{
//                         return(
//                         <>
//                              <div className='card' key={item.id}>
                               
//                                 <p>{item.name}</p>
//                                <p>{item.tel}</p>
//                                 <p>{item.status}</p>
                               
                               
                                
//                                </div>
                              
//                                </> )
                               

//  })


   //  const cards = Data
   //  .filter((item)=> item.id )
   //  .map(item =>{
   //      return(
   //       <>
   //      <div className='card'>
           
   //         <p>{item.name}</p>
   //         <p>{item.tel}</p>
   //         <p>{item.status}</p>
           
           
            
   //        </div>
          
   //        </> 
   //      )
   //     })
   
 return(

    <>
    <h1>Contact Profile</h1>
   {/* {cards} */}
   
   <div >
          {
            data
              .filter(list => list.id === parseInt(userId)  )
              .map((list) => (
                <div  key={ list.id }>
                  <h2>Name: {list.name}</h2>
                 
                </div>
              ))}
        </div>
    </>
 )
}

