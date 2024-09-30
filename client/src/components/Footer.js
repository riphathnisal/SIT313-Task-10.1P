import React from 'react'
import './Footer.css';
import insta from "../Images/i.png";
import fbook from "../Images/fbook.jpg";
import xmsg from "../Images/x.png";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-section'>
            <h5>Explore</h5>
            
                <span>Home</span>
                <span>Questions</span>
                <span>Articles</span>
                <span>Tutorials</span>
        </div>
        <div className='footer-section'>
        <h5>Support</h5>

            <span>FAQs</span>
            <span>Helps</span>
            <span>Contact Us</span>
        
        </div>
        <div className='footer-section'>
            <h5>Stay Connected</h5>
            <div className='social-media'>
            <img src={fbook} alt="Facebook" />
            <img src={insta} alt="Facebook" />
            <img src={xmsg} alt="Facebook" />
            </div>
        </div>
        
        
        <div className='footer-end'>
            <p>Dev@Deakin 2024</p>
                <span>Privacy Policy</span>
                <span>Terms</span>
                <span>Code of Conduct</span>
        
                </div>
      
    </div>
  );
}

export default Footer
