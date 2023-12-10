import React from 'react';
import { useState } from "react";
import Hero from './Hero';
import Form from './Form';
import BarChart from './Bar';
import '../styles/global.css'

const App = () => {
  const [chartData, setChartData] = useState([]);
  const handleFormData = (data) => {
    setChartData(prevData => [...prevData, data]);
  }

  return (
  <div id="mainContainer" className="bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero/>
      <Form onFormData={handleFormData} />
      <BarChart chartData={chartData}/>
    </div>
  </div>
  );
};

export default App;