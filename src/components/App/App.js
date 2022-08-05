import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.js';
import RockClimbing from '../RockClimbing/RockClimbing.js';
import Surfing from '../Surfing/Surfing.js';
import Contact from '../Contact/Contact.js';
import Logo from '../Logo/Logo.js';

const App = () => {
    return (
      <Router>
        <div className="App">
          <Logo />
          <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rock-climbing">Rock Climbing</Link>
              </li>
              <li>
                <Link to="/surfing">Surfing</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="rock-climbing" element={<RockClimbing />} />
              <Route exact path="surfing" element={<Surfing />} />
              <Route exact path="contact" element={<Contact />} />
            </Routes>
        </div>
      </Router>
    );
}

export default App;
