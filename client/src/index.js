import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/global.css';
// import '@radix-ui/themes/styles.css';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<App />, document.getElementById('root')); // Pointing to the 'root' element in the public/index.html where our app will be attached
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);


// This file serves as the entry point to our React application.
// Whenever changes are made to the React components, this file 
// ensures they get rendered and displayed on the page.

/**
 * // Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
 */