import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db, auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import bcrypt from 'bcryptjs';

const Login = () => {
  const [contact, setContact] = useState({ 
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const LoginConfig = async () => {
    const { email, password } = contact;

    try {
      await signInWithEmailAndPassword(auth, email, password);


      const dbref = collection(db, 'Auth');
      const checkUser = query(dbref, where('Email', '==', email));
      const emailInfo = await getDocs(checkUser);
      const user = emailInfo.docs.map(doc => doc.data());

      if (user.length > 0) {
        const users = user[0];
        const PasswordCheck = await bcrypt.compare(password, users.Password);

        if (PasswordCheck) {
          navigate('/profile');
        } else {
          alert('Invalid password. Try again!');
        }
      } else {
        alert('Invalid email. No account found!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="header-div">
      <label htmlFor="email" className="input-label">Your Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange} 
        value={contact.email}
      />
      
      <br></br>

      <label htmlFor="password" className="input-label">Your Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange} 
        value={contact.password}
      />
      
      <br></br>

      <button onClick={LoginConfig}>Login</button>

      <br></br>
      <br></br>
      
      <div className="signup-container">
        <p>Don't have an account?</p>
        <Link to="/signup" className="signup-link">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
