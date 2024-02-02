import React from 'react';
import './Plan.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plan = () => {
  return (
   <div className="plans-container">
    <div className="blur blur-plan-1"></div>
    <div className="blur blur-plan-2"></div>
    <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>LETS BEGIN </span>
        <span>THE JOURNEY WITH </span>
        <span className='stroke-text'>OUR FLEXI PLANS</span>
    </div>

    <div className="plans" id='plans'>
        {plansData.map((plan, i)=> (
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((feature, i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
                <div><span>See more benefits -></span>
                </div>
                <button className="btn">Join Now</button>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Plan