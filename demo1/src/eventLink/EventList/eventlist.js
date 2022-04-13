import React, { useState } from 'react'
import Data from './MOCK_DATA2'
import SingleEvent from "../EventList/SingleEvent/SingleEvent"
import Nav from '../../Nav/nav';
import Footer from '../../Home/Footer/Footer';

console.log(Data);

function Eventlist() {

    // const [content, setContent] = useState([]);

  return (
    <>
    <Nav />

    <div className='single-event'>

    {
      
      <ul>
        <div className='single-event-styling'>
          <SingleEvent
            data = {Data[0]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[1]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[2]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[3]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[4]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[5]}
            />
      </div>
      <div className='single-event-styling'>
          <SingleEvent
            data = {Data[6]}
            />
      </div>

      </ul>
      
      
      
    }
    </div>
    <Footer />
    </>
  )
}

export default Eventlist