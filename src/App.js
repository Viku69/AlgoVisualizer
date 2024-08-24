import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DijkstraVisualizer from './components/DijkstraVisualizer';
import SortPage from './pages/SortPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (

    <Routes>
      <Route path="/pathfinder" element={<DijkstraVisualizer />} />
      <Route path="/sorting" element={<SortPage />} />
      <Route path="/searching" element={<SearchPage />} />
      <Route path="/" element={<Home/>} />
    </Routes>

  );
};

export default App;
