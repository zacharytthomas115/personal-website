// src/App.js
import React, { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentScreen('Home')}>Home</button>
        <button onClick={() => setCurrentScreen('Contact')}>Contact</button>
        <button onClick={() => setCurrentScreen('Projects')}>Projects</button>
        <button onClick={() => setCurrentScreen('About')}>About</button>
      </nav>
      {renderScreen()}
    </div>
  );
};

export default App;