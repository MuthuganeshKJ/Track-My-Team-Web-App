import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AttendenceSheet from './components/AttendenceSheet';
import Header from './components/Header';

import Login from './components/Login';

function App() {
  return (
    <div>
      <Header/>

      <Router>
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<AttendenceSheet />} />
          
        </Routes>
        
      </Router>
      
    </div>
  );
  
}

export default App
