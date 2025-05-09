import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt=''/>
          <p>We are a family owned Maditerraneran restaurant, focused on tradition recipes served with a modern twist.</p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Reservations</a></li>
            <li><a href='/'>Order Online</a></li>
            <li><a href='/'>Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/>123 TownCity, USA</li>
            <li>Phone: <br/>+1 0123 456 789</li>
            <li>Emali: <br/>little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href='/'>Facebook</a></li>
            <li><a href='/'>Thread</a></li>
            <li><a href='/'>Instagram</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;