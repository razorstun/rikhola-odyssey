// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <p>Hello! I'm Sachin Negi, a Mumbai-based software engineer and passionate tech enthusiast.<br /><br />
          Currently, I'm contributing to Honda North America's efforts in building and optimizing a data transfer platform for automobile development.
          When I'm not wrestling with code, you'll catch me sketching my dreams, lifting more than just my laptop, and exploring the world on two wheels.<br /><br />
          If you have any questions or would like to connect, feel free to reach out to me via email.</p>
      </main>
      <Footer />
      <div className='fuzzy-overlay'></div>
    </div>
  );
};

export default HomePage;