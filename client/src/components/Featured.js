import React from 'react';
import pluto from "../Images/pluto.jpg";
import olympic from "../Images/olympic.png";
import food from "../Images/food.jpg";

import './Featured.css';

function Featured() {
    const articles = [
        {
            id: 1,
            name: "Pluto's new moon",
            description: "Charan the new moon of Pluto",
            rating: "*****   ",
            author: " John De Sliva",
            image: pluto,
        },
        {
            id: 2,
            name: "Olympics Begin",
            description: "Latest updates from the Paris Olympics",
            rating: "*****   ",
            author: " Steven Maccoy",
            image: olympic,
        },
        {
            id: 3,
            name: "Diabetic Foods! Top 10",
            description: "Prevent diabeties! avoid these foods ",
            rating: "***   ",
            author: " Roy John Junior",
            image: food,
        }
    ];
  return (
    <div className='Featured'>
        <h2>Featured Articles</h2>
        <div className='articles-container'>
            {articles.map(article => (
                <div className='article' key={article.id} >
                <img src={article.image} alt={article.name} className ="article-image" />
                <h3 className='article-name'>{article.name}</h3>
                <p className="article-description">{article.description}</p>
                <div className='article-footer'>
                    <span className='article-rating'> {article.rating} </span>
                    <span className='article-author'> {article.author}</span>
                    </div>
          </div>
        ))}
             </div>
             <button className="button">See all articles</button>
    </div>
  );
  
}

export default Featured
