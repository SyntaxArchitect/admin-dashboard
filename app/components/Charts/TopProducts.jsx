import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Chart } from 'primereact/chart';

const TopProducts = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [startDate, setStartDate] = useState(new Date("May 01 2021"));
  const [endDate, setEndDate] = useState(new Date("Jun 30 2021"));

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
      datasets: [
        {
          data: [55, 31, 14],
          backgroundColor: ['#98D89E', '#EE8484', '#F6DC7D'],
          hoverBackgroundColor: ['#69E275', '#FF4E4E', '#F3D258']
        }
      ]
    };

    const options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            usePointStyle: true
          },
          position: 'right'
        }
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  return (
    <div className='topproducts h-64 flex flex-col'>
      <div className='flex items-center justify-between'>
        <h4 className='font-montserrat text-xl font-semibold p-2 pl-5'>Top products</h4>
        <div className="inline-block text-gray-500">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="MMM yyyy"
            className="p-2 border-none bg-transparent rounded leading-5 font-montserrat text-xs font-normal focus:outline-none focus:none"
            placeholderText="Select a date range"
          />
        </div>
      </div>

      <div className="card flex items-center justify-center">
        <Chart type="doughnut" data={chartData} options={chartOptions} className='doughnut relative' />
      </div>
    </div>
  )
}

export default TopProducts;