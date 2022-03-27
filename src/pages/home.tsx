import React from 'react';
import './home.scss';
import image from '../images/header.png'

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${image}`}}/>
      <main>
        <section className="section1"/>
        <section className="section2"/>
        <section className="section3"/>
      </main>
    </div>
  );
};
