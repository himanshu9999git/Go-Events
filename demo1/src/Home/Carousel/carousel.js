import React from 'react'
import "./carousel.css"
import download from "./images/a.jpg";       
import webinar from "./images/b.jpg";       
import workshops from "./images/c.png";   

function carousel() {
    return (
      <div id="carouselExampleControls" className="carousel slide main-carousel-wrapper" data-ride="carousel">
        <div className="carousel-inner main-carousel-wrapper">
          <div className="carousel-item active">
          <img className="d-block w-100 main-img" 
              src={download}
              alt="First slide" />
          </div>
          <div className="carousel-item">
          <img className="d-block w-100 main-img" 
              src={webinar}
              alt="Second slide" />
          </div>
          <div className="carousel-item">
          <img className="d-block w-100 main-img" src={workshops} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
}

export default carousel