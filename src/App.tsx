// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage';
import './assets/css/style.css';
import BabyShower from "./components/BabyShower";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/baby" element={<BabyShower />} />
        </Routes>
      </Router>
  );
};

export default App;
