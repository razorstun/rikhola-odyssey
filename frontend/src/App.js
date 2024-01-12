import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CareerPage from './components/Careerpage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/career" exact Component={CareerPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;