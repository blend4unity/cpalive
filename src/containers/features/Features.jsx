import React from 'react';
import './features.css';
import {Feature } from '../../components';

const featuresData = [
    {
<<<<<<< HEAD
      title: 'REAL TIME REPORT',
      text: 'We provide our real time reporting panel access to every publisher. Publishers can view their traffic reports 24/7 by using our panel.',
    },
    {
      title: 'HIGHEST PAYOUTS',
      text: 'We close the campaign deals with an advertiser on a high payout because of the quality traffic that our Affiliate members generate.',
    },
    {
      title: 'EXCLUSIVE OFFERS',
      text: 'We have most of the exclusive offers from the world. Check our offer list and apply the one that suits your traffic the best. Check out our latest offers.',
    },
   
    {
      title: 'TIMELY PAYMENT',
      text: 'The payment of publishers is usually made in 30 days (NET30) after the end of the month and after receiving a payment from the Advertiser.',
    },
    {
      title: 'CREATIVE SUPPORT',
      text: 'LTPLDIGITAL has a team of creative support experts that design appealing landing pages and content that can be used to boost their campaigns.',
=======
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
>>>>>>> 9cc6d4455690b7e567425e2116a5e0072ffbc7f5
    },
  ];

const Features = () => (
    <div className="gpt3__features section__padding" id="services">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );

export default Features