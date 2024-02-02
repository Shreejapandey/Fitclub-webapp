import React from 'react';
import './Home.css';
import Header from '../HeaderFile/Header';
import main_image from '../../assets/main_image.png';
import main_image_back from '../../assets/main_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Home = () => {
  return (
    <div className = "Home">
        <div className = "left-half">

        <Header />


        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club of India</span>
        </div>
        
        
        <div className='main-content'>
          <div>
            <span className='stroke-text'>Its time to </span> <span>shape</span>
          </div>
          <div>
            <span>your body</span>
          </div>
          <div>
              <span>The only place where you can get the best body shape and live your life to the fullest.</span>
            </div>
        </div>

        <div className="figures">
          <div>
            <span>360+</span>
            <span>Expert Coaches</span>
            </div>
            <div>
            <span>1670+</span>
            <span>Members Joined</span>
            </div>
            <div>
            <span>58+</span>
            <span>Fitness Programs</span>
            </div>
        </div>

        <div className="left-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

        </div>

        <div className = "right-half">
          <button className="btn">Join Now</button>

          <div className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

            <img src={main_image} alt="" className="main-image" />
            <img src={main_image_back} alt="" className="main-image-back" />

            <div className="calories">
              <img src={calories} alt="" />
              <div>
              <span>Calories Burned</span>
              <span>340 kcal</span>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Home;