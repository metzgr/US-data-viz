// Import core React library
import React from 'react';
// Import ReactDOM for rendering components
import ReactDOM from 'react-dom';
// Import the main App component
import App from './App';

// Import USWDS CSS for global styles
import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';

// Render the App component into the DOM element with the ID 'root'
ReactDOM.render(<App />, document.getElementById('root'));