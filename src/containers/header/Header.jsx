import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home" >
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                Top Digital Marketing Trends for 2022
                </h1>
                <p>As we enter a new decade and tech continues to change at a rapid pace, here are the latest digital marketing trends and predictions we're excited to see in the upcoming year.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Join Our Affliate Program" disabled />
                    <button type="button"><a href='http://affiliate.ltpldigital.com/m/access'>Join Us</a></button>
                </div>
                <div className="gpt3__header-content__people">
                   <img src={people}  alt="people" />
                   <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
                 
           </div>
           <div className="gpt3__header-image">
                    <img src={ai} alt="HeaderImage"/>
                </div>
        </div>
    )
}

export default Header