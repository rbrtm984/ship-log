import React from 'react';
import Hero from './Hero';
import Form from './Form';
import '../styles/global.css'

const App = () => {
  return (
  <div id="mainContainer" className="bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero/>
      <Form/>
    </div>
  </div>
  );
};

export default App;