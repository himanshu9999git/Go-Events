import React from 'react'
import Carousel from "../Home/Carousel/carousel"
import Event from "../Home/event/event"
import Nav from '../Nav/nav';
import Footer from './Footer/Footer';

function Home() {
  return (
    <div className='home'>
        <Nav />
        <Carousel />
        <Event />
        <Footer />
    </div>
  )
}

export default Home;