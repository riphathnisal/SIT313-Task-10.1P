import React from 'react';
import plant from "../Images/plant.png";
import code from "../Images/code.jpg";
import cad from "../Images/cad.jpg";

import './Tutorials.css';

function Featured() {
    const tutorials = [
        {
            id: 1,
            name: "Plant watering System",
            description: "Steps to build an Arduino based plant watering system",
            rating: "*****   ",
            author: " Emily De Cathalon",
            image: plant,
        },
        {
            id: 2,
            name: "Let's Build a Website",
            description: "Learn to build a website using React JS",
            rating: "*****   ",
            author: " Henry Jurard",
            image: code,
        },
        {
            id: 3,
            name: "Autocad made Easy!",
            description: "Learn autocad fron scratch",
            rating: "***   ",
            author: "  John Jones Junior",
            image: cad,
        }
    ];
  return (
    <div className='Tutorials'>
        <h2>Featured Tutorials</h2>
        <div className='tutorials-container'>
            {tutorials.map(tutorial => (
                <div className='tutorial' key={tutorial.id} >
                <img src={tutorial.image} alt={tutorial.name} className ="tutorial-image" />
                <h3 className='tutorial-name'>{tutorial.name}</h3>
                <p className="tutorial-description">{tutorial.description}</p>
                <div className='tutorial-footer'>
                    <span className='tutorial-rating'> {tutorial.rating} </span>
                    <span className='tutorial-author'> {tutorial.author}</span>
                    </div>
          </div>
        ))}
             </div>
             <button className="button">See all tutorials</button>
    </div>
  );
  
}

export default Featured
