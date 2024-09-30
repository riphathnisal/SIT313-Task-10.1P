import React from 'react';
import './Homepage.css';  
import deakin from "../Images/deakin.jpg";  

function Homepage() {
  return (
    <div className='Homepage'>
      <div className='homepageContainer' style={{ backgroundImage: `url(${deakin})` }}>
      
      </div>
    </div>
  );
}

export default Homepage;
