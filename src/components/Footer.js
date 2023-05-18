import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <h4>Quick Links</h4>
            <ul className='list-unstyled'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/category/all'>Categories</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='col-md-3 col-sm-6'>
            <h4>Follow Us</h4>
            <ul className='social-icons list-unstyled'>
              <li><a href='#'><FaFacebook /></a></li>
              <li><a href='#'><FaTwitter /></a></li>
              <li><a href='#'><FaInstagram /></a></li>
              <li><a href='#'><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <p className='text-muted'>© 2023 My Online Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
