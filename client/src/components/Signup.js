import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Signup.css';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import bcrypt from 'bcryptjs'

const Signup = () => {
  const [contact, setContact] = useState({ 
    firstName: '',
    lastName: '',
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

  const SignupConfig = async () => {
    const { firstName, lastName, email, password } = contact;

    try {
      const dbref = collection(db, 'Auth');
      const emailCheck = query(dbref, where('Email', '==', email));
      const emailInfo = await getDocs(emailCheck);

      if (!emailInfo.empty) {
        alert('This email already exists. Try a different email!');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      const hidePassword = await bcrypt.hash(password, 10);

      await addDoc(dbref, {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: hidePassword,
      });

      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="header-signup">
      <h1>Create A New Account</h1>

      <label htmlFor="firstName" className="input-label">First Name*</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange} 
        value={contact.firstName}
      />
      
      <br></br>

      <label htmlFor="lastName" className="input-label">Last Name*</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange} 
        value={contact.lastName}
      />
      
      <br></br>

      <label htmlFor="email" className="input-label">Email*</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange} 
        value={contact.email}
      />
      
      <br></br>

      <label htmlFor="password" className="input-label">Password*</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange} 
        value={contact.password}
      />
      
      <br></br>

      <button onClick={SignupConfig}>Sign Up</button>
    </div>
  );
};

export default Signup;
