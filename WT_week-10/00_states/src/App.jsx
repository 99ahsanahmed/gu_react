import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
//For Routing
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

//For states
import Calculator from './components/calculator';
import Login from './components/login';
import Login2 from './components/login2';
import Cart from './components/cart';
import Counter from './components/Counter'
import './App.css';

function App() {

  return (
    <Router>
    <nav>
      <ul className='flex'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
