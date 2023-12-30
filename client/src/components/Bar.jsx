import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const BarChart = ({ chartData }) => {
  const dataForChart = Object.entries(chartData).map(([day, projects]) => {
    const totalHours = projects.reduce((acc, project) => acc + project.hoursWorked, 0);
    return { day, totalHours };
  });

  const data = {
    labels: dataForChart.map(entry => entry.day),
    datasets: [{
      label: 'Hours Worked',
      data: dataForChart.map(entry => entry.totalHours),
      backgroundColor: 'rgba(135, 206, 250, 0.6)', // Lighter blue with some transparency
      borderColor: 'rgba(135, 206, 250, 1)', // More solid border color
      borderWidth: 1
    }]
  };

  return <Bar data={data} />;
};

export default BarChart;
