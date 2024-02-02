import React from 'react';
import './Home.css';
import Header from '../HeaderFile/Header';
import main_image from '../../assets/main_image.png';
import main_image_back from '../../assets/main_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Home = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className = "Home" id='home'>
      <div className="blur blur-home"></div>
        <div className = "left-half">

        <Header />

        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile ? '178px' : '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
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
            <span>
              <NumberCounter end={240} start={190} delay={4} postFix="+" />
            </span>
            <span>Expert Coaches</span>
            </div>
            <div>
            <span><NumberCounter end={1670} start={1580} delay={4} postFix="+" /></span>
            <span>Members Joined</span>
            </div>
            <div>
            <span><NumberCounter end={58} start={38} delay={4} postFix="+" /></span>
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

          <motion.div
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition} 
            className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

            <img src={main_image} alt="" className="main-image" />
            <motion.img 
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={main_image_back} alt="" className="main-image-back" />

            <motion.div
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition} 
              className="calories">
              <img src={calories} alt="" />
              <div>
              <span>Calories Burned</span>
              <span>340 kcal</span>
              </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Home;