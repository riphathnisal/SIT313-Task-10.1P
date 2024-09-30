
import React from 'react';
import Featured from './Featured';
import Tutorials from './Tutorials';
import Homepage from './Homepage';
import Bar from './Bar';
import Footer from './Footer';
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className='Main'>
        <Homepage />
      <Featured />
      <Tutorials />
      <Bar />
      <Footer />
    </div>
  );
};

export default Mainpage;
