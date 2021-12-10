import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Contacts} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';
import ScrollButton from './components/scroll/ScrollButton'; 


const App = () => {
    return (
        
        <div className= "App">
            <div className= "gradient__bg">

                <Navbar />
                <Header />
            </div>
            
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Contacts />
            <Footer />
            <ScrollButton /> 
            
        </div>
        
    )
}

export default App


