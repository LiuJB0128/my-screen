import React from 'react';
import './home.scss';
import image from '../images/header.png'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${image}`}}/>
    </div>
  );
};
