
import './App.css';

import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={handleThemeToggle}>HIT THE BUTTON</button>
    </div>
  );
}

export default App;
