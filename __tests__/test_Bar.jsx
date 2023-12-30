// import React from 'react';
// import { render } from '@testing-library/react';
// import Bar from '../client/src/components/Bar';

// describe('Bar', () => {
//   test('renders bar chart correctly with provided data', () => {
//     const chartData = {
//       Monday: [
//         { projectName: 'Project A', hoursWorked: 5 },
//         { projectName: 'Project B', hoursWorked: 3 },
//       ],
//       Tuesday: [
//         { projectName: 'Project C', hoursWorked: 7 },
//         { projectName: 'Project D', hoursWorked: 2 },
//       ],
//     };

//     const { getByText } = render(<Bar chartData={chartData} />);

//     // Assert that bar chart is rendered correctly
//     expect(getByText('Monday')).toBeInTheDocument();
//     expect(getByText('Project A')).toBeInTheDocument();
//     expect(getByText('5')).toBeInTheDocument();
//     expect(getByText('Project B')).toBeInTheDocument();
//     expect(getByText('3')).toBeInTheDocument();
//     expect(getByText('Tuesday')).toBeInTheDocument();
//     expect(getByText('Project C')).toBeInTheDocument();
//     expect(getByText('7')).toBeInTheDocument();
//     expect(getByText('Project D')).toBeInTheDocument();
//     expect(getByText('2')).toBeInTheDocument();
//   });

//   test('renders bar chart correctly with empty data', () => {
//     const chartData = {};

//     const { getByText } = render(<Bar chartData={chartData} />);

//     // Assert that bar chart is rendered correctly
//     expect(getByText('No data available')).toBeInTheDocument();
//   });
// });