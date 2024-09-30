import React, { useState } from 'react';
import './Bar.css';

function Bar() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch('http://localhost:2002/subscribe', {
        method: 'POST',
        headers: {
          //Ensure correct content type
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
        //Email converted to string
        body: new URLSearchParams({ email }), 
      });

      if (response.ok) {
        const message = await response.text();
        //Sucess message sent
        alert(message); 
        //input cleared
        setEmail(''); 
      } else {
        alert('Failed to subscribe. Please try again.'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='bar'>
      <div className='bar-container'>
        <div className="bar-logo">SIGN UP FOR OUR DAILY INSIDER</div>
        <form onSubmit={handleSubscribe}> 
          <input
            className="bar-search"
            type="email" 
            placeholder="Enter Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button className="button-new" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Bar;
