import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchCard from './components/FetchCard';
import CardBacks from './components/CardBacks';
import ClassicCards from './components/ClassicCards';
import Homepage from './components/Homepage';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cardsback' element={<CardBacks />} />
        <Route path='/cardsclassic' element={<ClassicCards />} />
        <Route path='/card/:idorslug' element={<FetchCard />} />
        <Route path='*' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;