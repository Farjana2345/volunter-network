import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Events = ({event}) => {
   const[click, setClick]=useState(true);
    const handleDelete = (event,id) =>{
        fetch(`http://localhost:5055/deleteEvent/${id}`,{
            method : 'DELETE',

        })
        .then(res=>res.json())
        .then(result=>{
           if(result){
               
              
           }
           
        })
    }
    return (
        <div id="cards" className="col-md-4">
        
          
                <h1>{event.name}</h1>
                <img src={event.imageUrl} alt=""/>
                <button onClick={()=>handleDelete(event._id)}>Delete</button>
            
          
        </div>
    );
};

export default Events;