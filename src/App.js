// src/App.js
import React, { useState } from 'react';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import styles from './styles/styles.modules.css';

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
        <button className='button' onClick={() => setCurrentScreen('Home')}>Home</button>
        <button className={styles.button} onClick={() => setCurrentScreen('Contact')}>Contact</button>
        <button className={styles.button} onClick={() => setCurrentScreen('Projects')}>Projects</button>
        <button className={styles.button} onClick={() => setCurrentScreen('About')}>About</button>
      </nav>
      {renderScreen()}
    </div>
  );
};

export default App;