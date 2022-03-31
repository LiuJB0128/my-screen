import React from 'react';
import './home.scss';
import image from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import {Chart4} from '../components/chart-4';
import {Chart5} from '../components/chart-5';
import {Chart6} from '../components/chart-6';
import {Chart7} from '../components/chart-7';
import {Chart8} from '../components/chart-8';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${image}`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
          <Chart3/>
        </section>
        <section className="section2">
          <Chart7/>
          <Chart8/>
        </section>
        <section className="section3">
          <Chart4/>
          <Chart5/>
          <Chart6/>
        </section>
      </main>
    </div>
  );
};
