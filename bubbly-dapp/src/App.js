import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Platform from './pages/platform';
import Roadmap from './pages/roadmap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/roadmap" element={<Roadmap/>} exact />
        <Route path="/platform" element={<Platform/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
