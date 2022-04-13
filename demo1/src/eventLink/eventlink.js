import React from 'react'
import "./eventlink.css";
import international from "./images/international.jpg";       
import webinar from "./images/webinar.jpg";       
import workshops from "./images/workshops.jpg";       
import seminar from "./images/seminar.png";
import talks from "./images/tech.png";
import hackathon from "./images/hackathon.webp";
import Nav from '../Nav/nav';
import Footer from '../Home/Footer/Footer';
import { Link } from 'react-router-dom';
function eventlink() {
    return (

      <>
      <Nav />

      <div className="events-wrapper">
        <h1 align="center" className="evetxt">Events</h1>          
        <div className="first3">
          <div className="event">
            <Link to='/eventList'>
              
            <img src={international} className="event-imgg" />
            </Link>
          
          </div>
          <div className="event"><img src={seminar} className="event-imgg"/></div>
          <div className="event"><img src={webinar} className="event-imgg"/></div>
        </div>
        <div className="first3">
          <div className="event"><img src={workshops} className="event-imgg"/></div>
          <div className="event"><img src={hackathon} className="event-imgg"/></div>
          <div className="event"><img src={talks} className="event-imgg"/></div>
        </div>
        {/* <div class="first3">
            <div class="event"><img src="images/download.png"></div>
            <div class="event"><img src="images/seminar.png"></div>
            <div class="event"><img src="images/webinar.jpg"></div>
        </div> */}
        <div>
        </div>
      </div>
      <Footer />
      </>
      );
}

export default eventlink