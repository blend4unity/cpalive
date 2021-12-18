import React from 'react';
import { Feature } from '../../components'
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="products">
           <div className="gpt3__whatgpt3-feature">
                <Feature title="LinkedWide " text="LTPLDIGITAL offers advertisers a variety of services to meet the unique requirements of their business. Just briefly state requirements and we will get back to you with the best offer for your business to succeed.

Pre Launch and Post Launch plans have been developed to make a thorough analysis of the market and maximize the LTV.
LTPLDIGITAL will save your time and money and provide the desired results." />

            </div>
            <div className="gpt3__whatgpt3-heading">
              <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p><a href='http://affiliate.ltpldigital.com/m/access'>Join as Affliate</a></p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Digital Marketing" text="SOCIAL NETWORKING MARKETING
                                                         GOOGLE ADSENSE TRAINING
                                                         CPA/CPL/CPC MARKETING
                                                         AFFILIATE MARKETING
                                                         E-COMMERCE" />
                <Feature title="Insurance" text="GENERAL INSURANCE
                                                 STUDENT INSURANCE
                                                 FARMER INSURANCE
                                                 HEALTH INSURANCE
                                                 CORP INSURANCE
                                                 LIFE INSURANCE" />
                <Feature title="CA Services" text="COMPANY REGISTRATION & ALL ROC WORK
                                                   GST REGISTRATION & FILING
                                                   MSME REGISTRATION
                                                   INCOME TAX FILIING
                                                   FSSI REGISTRATION" />
                <Feature title="Field Survey" text="KYC & EKYC WORK FOR DIGITAL PAYMENT BANK
                                                    DATA COLLECTION WORK
                                                    POI & GIS SURVEY WORK
                                                    METER READING WORK " />
            </div>
        </div>
    )
}

export default WhatGPT3