
import './App.css';
import React from 'react'
import {LetterList} from "./components/letterList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LetterView } from './components/LetterView';
import { LetterUploader } from './components/admin/LetterUploader';
import { About } from './components/About';
import { Diary } from './components/diary.js'; // Importing the Diary component
function App() {
  return (
      
      <Router>
        <div>
          
        
        <Routes>
          <Route path="/" element={<LetterList />} />
          <Route path="/letter/:id" element={<LetterView />} />
          <Route path="/admin/upload/1324" element={<LetterUploader />} />
          <Route path="/about" element={<About />} />
          <Route path="/diary" element={<Diary />} /> {/* Route for the Diary component */}
          {/* Add more routes as needed */}
        </Routes>
    </div>

      </Router>
      
  );
}

export default App;
