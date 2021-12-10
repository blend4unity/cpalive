import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.png';
import './navbar.css';

const Menu = () =>( 
    <>
          <p><a href="#home">Home</a></p>
          <p><a href="#products">Products</a></p>{/*whatgpt3 section */}
          <p><a href="#services">Services</a></p>{/*Feature section */}
          <p><a href="#affliate">Affliate</a></p> {/*Blog section */}
          <p><a href="#about-us">About Us</a></p>       {/*Possibility section */}  
          <p><a href="#Contacts">Contact Us</a></p>

                 
   </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo}  alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        {/*<p>Sign in</p>*/}
       <a href="http://affiliate.ltpldigital.com/m/access"> <button type="button">Sign up</button></a>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/*<p>Sign in</p>*/}
            <a href="http://affiliate.ltpldigital.com/m/access"> <button type="button">Sign up</button></a>
          </div>
        </div>
        )}
      </div>

    </div>
 );
};

export default Navbar;