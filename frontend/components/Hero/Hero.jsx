import React, { useEffect } from 'react';
import './Hero.css';
import hand_icon from '../assests/hand_icon.png';
import arrow_icon from '../assests/arrow.png';
import hero_img from '../assests/hero_image.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(()=>{

        Aos.init({duration:2000});
    },[]) ;

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2 data-aos="fade-down">NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p data-aos="fade-down">New</p>
                    <img data-aos="fade-down"  src={hand_icon} alt="" />
                </div>
                <p data-aos="fade-down">Collections</p>
                <p data-aos="fade-down">For everyone</p>
            </div>

            <div className="hero-latest-btn ">
                <div >Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
