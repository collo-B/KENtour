import Loading from './Loading';
import Events from './Events';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHead from './Nav';
// import EventForm from './EventForm';
// import {
//   Switch,
//   Route
// } from "react-router-dom";

import React,{useState, useEffect} from 'react';


function App() {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([])

  //fetch db.json
  
  const fetchEvents = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://reactdbjson.herokuapp.com/events')
      const events = await response.json()
      console.log(events);
      setLoading(false)
      setEvents(events)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  //remove event
  const removeTour = (id) => {
    const newEvents = events.filter((event) => event.id !== id)
    setEvents(newEvents)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )}

    if (events.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>no events left</h2>
            <button className='btn' onClick={() => fetchEvents()}>
              refresh
            </button>
          </div>
        </main>
      )
    }
  return (
    <div>
      <NavbarHead />
    
      <Events  events={events} removeTour={removeTour} />
    </div>
  );
}

export default App;