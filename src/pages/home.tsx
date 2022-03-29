import React from 'react';
import './home.scss';
import image from '../images/header.png';
import {Chart1} from '../components/chart-1';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${image}`}}/>
      <main>
        <section className="section1">
          <Chart1/>
        </section>
        <section className="section2"/>
        <section className="section3"/>
      </main>
    </div>
  );
};
