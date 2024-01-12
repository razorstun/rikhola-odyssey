// src/components/CareerPage.js
import React, { useEffect, useState } from 'react';
import '../styles/CareerPage.css';
import Header from './Header';
import Footer from './Footer';

const CareerPage = () => {
  const [careerRecords, setCareerRecords] = useState([]);

  useEffect(() => {
    const fetchCareerRecords = async () => {
      try {
        const response = await fetch('/api/career');
        const data = await response.json();
        setCareerRecords(data);
      } catch (error) {
        console.error('Error fetching career records:', error);
      }
    };

    fetchCareerRecords();
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <h2>Career Page Body</h2>
        <ul>
          {careerRecords.map(record => (
            <li key={record.id}>
              <strong>{record.position}</strong> - {record.location}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPage;
