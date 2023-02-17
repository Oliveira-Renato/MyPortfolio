import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './styles/global.scss'
import { Home } from "./routes/home";
import { AboutMe } from './routes/aboutMe';

import UseHeaderShow from './hooks/navBackShow/headerShow';
import './styles/variables.css';

function App() {

  return (
    <div className="App">
      
       <BrowserRouter>
       <UseHeaderShow />
        
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutMe />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
