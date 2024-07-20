// Import core React library
import React from 'react';
// Import ReactDOM for rendering components
import ReactDOM from 'react-dom';
// Import the main App component
import App from './App';

// Import USWDS CSS for global styles
import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';

// Dynamically load the USWDS JavaScript
const loadScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

// Load the USWDS JavaScript
loadScript('https://unpkg.com/uswds@3.0.0/dist/js/uswds.min.js');

// Render the App component into the DOM element with the ID 'root'
ReactDOM.render(<App />, document.getElementById('root'));