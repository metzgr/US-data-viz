// Import core React library
import React from 'react';
// Import ReactDOM for rendering components
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';

// Import USWDS CSS for global styles
import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the DOM element with the ID 'root'
root.render(<App />);