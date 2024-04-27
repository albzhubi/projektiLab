import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Route , Routes} from 'react-router-dom';
import Home from './Pages/Home';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
