import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const BarChart = ({ chartData }) => {
    // chartData = [
    //     { label: 'Monday', value: 8 },
    //     { label: 'Tuesday', value: 6 },
    //     { label: 'Wednesday', value: 7 },
    //     { label: 'Thursday', value: 9 },
    //     { label: 'Friday', value: 5 },
    //     { label: 'Saturday', value: 10 },
    //     { label: 'Sunday', value: 8 },
    //     ];
  // Define the chart's data and configuration
  const data = {
    labels: chartData.map(d => d.label),
    datasets: [
      {
        label: 'Hours Worked',
        data: chartData.map(d => d.value),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
};

  return <Bar data={data} />;
};

export default BarChart;
