import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const[imageUrl, setImageUrl]=useState(null);
    const onSubmit = data => {
        const eventData ={
            name : data.name,
            imageUrl : imageUrl
        };
        const url = `http://localhost:5055/addEventNetwork`;
        console.log(eventData)
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>console.log('server site response', res));
    };

    const handleImage = event =>{
        console.log(event.target.files)
        const imageData = new FormData();
        imageData.set('key', '48cdb70d449cb4acbd4362f065b671cc');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
    
                <input name="name" defaultValue="New Event" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImage} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;