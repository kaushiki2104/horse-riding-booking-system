
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/bookingSlice';
// import { motion } from 'framer-motion';
import './landingpage.css';
import { Carousel } from './carouselComponent/Carousel';
import slideData from '../jsonData/carouselData.json'
import Footer from './footer/Footer';
import horseData from '../jsonData/horseData.json'

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBookNow = (horseName1, stabName1) => {
    
    const horseDetails = { horseName:horseName1, stableName:stabName1};

    // dispatch(setBookingDetails(horseDetails));
    dispatch(setPage('booking'));
    navigate('/booking', { state: {horseDetails} })
  };

  return (
    <>
    <div className='heador'>
      <div className='headorContaint'>
     <img className='h_logo' src="/assests/image/logo.png" alt="Logo" />
    <h1 className='heading'>Horse Ride Booking System</h1>
    <span > <button className='h_button' onClick={()=>(handleBookNow('',''))}>Book Now</button></span>
   
    </div>
    </div>
      <div className='carouselDiv'>
      <Carousel data={slideData.slides} />
      </div>
    <div className="landing-page">
     
      <div className="horses">
        { horseData?.horses.map((stab,index)=>(
          <div className="astable">
           <h1>{stab.name}</h1>
           <div className="astable2">
            {stab.horseDetail.map(horse=> (
              
              <div key={horse.id} className="horse-card">
                <img src={horse.image} alt={horse.name} />
                <h2>{horse.name}</h2>
                <p>Rating: {horse.rating}</p>
                <button onClick={()=>{ handleBookNow(horse.name,stab.name )}}>Book Now</button>
              </div>
             
            ))}
             </div>
            </div>
        ))
        
        }
      </div>
    </div>
    <div className='footer'>
      <Footer />
    </div>
    </>
  );
};

export default LandingPage;


const stables = {
  stable1: [
    { horseName: 'Thunder', },
    { horseName: 'Lightning', },
    { horseName: 'Blaze', },
    { horseName: 'Shadow', }
  ],
  stable2: [
    { horseName: 'Storm', },
    { horseName: 'Whirlwind', },
    { horseName: 'Comet', },
    { horseName: 'Meteor', }
  ],
  stable3: [
    { horseName: 'Tornado', },
    { horseName: 'Hurricane', },
    { horseName: 'Cyclone', },
    { horseName: 'Gale', }
  ],
  stable4: [
    { horseName: 'Breeze', },
    { horseName: 'Zephyr', },
    { horseName: 'Gust', },
    { horseName: 'Tempest', }
  ],
  stable5: [
    { horseName: 'Apollo', },
    { horseName: 'Zeus', },
    { horseName: 'Hera', },
    { horseName: 'Athena', }
  ]
};

console.log(stables);
