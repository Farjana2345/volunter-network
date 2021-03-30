import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';

const Home = () => {
    const[events, setEvents] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5055/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <div className="container">
            <div className="row">
            {
                events.map(event=><Events event={event}></Events>)
            }
        </div>
        </div>
    );
};

export default Home;