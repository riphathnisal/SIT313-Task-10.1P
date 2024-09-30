import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from './firebase';
import './UserProfile.css';
import {Link, useNavigate} from 'react-router-dom';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email = user.email;
        const q = query(collection(db, 'Auth'), where('Email', '==', email));
        const queryInfo = await getDocs(q);
        const userDetails = queryInfo.docs.map(doc => doc.data())[0];
        setUserData(userDetails);
      } else {
        setUserData(null); 
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const SignOutConfi = ()=>{
    auth.signOut();
    navigate('/')
  }

  return (
    <div className="profile-container">
      {userData ? (
        <div>
          <h1 className="profile-heading">User Profile</h1>
          <p className="profile-name"><strong>First Name:</strong> {userData.FirstName}</p>
          <p className="profile-name"><strong>Last Name:</strong> {userData.LastName}</p>
          <p className="profile-email"><strong>Email:</strong> {userData.Email}</p>
        </div>
      ) : (
        <p>Not logged in</p>
      )}

      <br></br>

      <button onClick={SignOutConfi}>Sign Out</button>

    </div>
  );
}

export default UserProfile;
