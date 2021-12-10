import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import gpt3Logo from '../../assets/logo1.png';
import './footer.css';

const Footer = () => (
  
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href='http://affiliate.ltpldigital.com/m/access'>Join Become an Affliate</a></p>
    </div>

    <div className="gpt3__footer-links" id="footer">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <div className='fa-icons'>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(63,190,216,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,26,233,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(232,12,12,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="skype" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(12,232,219,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="pinterest" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(232,12,16,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        <p><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(232,12,16,1)" iconSize="2" roundness="31%" url="https://some-website.com/my-social-media-url" size="38" /></p>
        </div>
        <p>Linkedwide Technology Pvt LTD <br /> All Rights Reserved</p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href='http://affiliate.ltpldigital.com/m/access'>Our Afflitate Program</a></p>
        <p><a href='/'>Social Media</a></p>
        <p><a href='/'>Counters</a></p>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><a href="#products">Products </a> </p>
        <p><a href="#services">Services</a></p>
        <p><a href="#Contacts">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>4 NO GOVERNMENT PLACE,KOLKATA-700001</p>
        <p>8371091805</p>
        <p>info@linkwide.in</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Linkedwide Technology PVT. All rights reserved.</p>
    </div>
    
  </div>
  
);

export default Footer;