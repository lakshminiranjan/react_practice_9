import React from 'react'
import profilePic from '../assets/profiile.jpeg';

function Card() {
  return (
    <div className="card">
        <img  className="img" src={profilePic} alt="Profile Image" />
        <h1 className="title">Nizy</h1>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur illo ut voluptatem sit veniam laboriosam quae, fuga sed facilis!</p>
    </div>
  )
}

export default Card