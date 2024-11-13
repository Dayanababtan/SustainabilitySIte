import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background image */}
      <div className="background"></div>

      {/* Top bar with login and menu button */}
      <header className="top-bar">
        <div className="menu-container">
          <button className="menu-button">☰</button>
          <div className="side-menu">
            <button className="menu-item">Option 1</button>
            <button className="menu-item">Option 2</button>
            <button className="menu-item">Option 3</button>
          </div>
        </div>
        <span className="login-label">Log in:</span>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="action-button">Login</button>
        <button className="action-button register-button">Register now</button>
      </header>

      {/* Welcome section */}
      <main className="welcome-section">
        <h1>Welcome to Sustainable Life!</h1>
        <p>Track your daily carbon footprint 
          and discover how your activities contribute to your 
          overall environmental impact. With Sustainable Life, 
          you can measure, record, and monitor emissions from everyday actions, 
          helping you make informed choices for a greener future. Let's make sustainability a habit, one day at a time!</p>
      </main>
    </div>
  );
}

export default App;
