import React from 'react';
import './home.scss';
import image from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${image}`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className="section2"/>
        <section className="section3"/>
      </main>
    </div>
  );
};
