import React from 'react';
import Home  from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() 
{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
