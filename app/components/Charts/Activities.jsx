import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function Activities() {
    const [startDate, setStartDate] = useState(new Date("May 01 2021"));
    const [endDate, setEndDate] = useState(new Date("Jun 30 2021"));
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const textColor = "#858585";
        const textColorSecondary = "#858585";
        const surfaceBorder = "#EAEAEA";
        const data = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [
                {
                    label: 'User',
                    backgroundColor: "#98D89E",
                    data: [500, 350, 200, 400, 250]
                },
                {
                    label: 'Guest',
                    backgroundColor: "#EE8484",
                    data: [400, 450, 300, 350, 150]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                        usePointStyle: true
                    },
                    align: 'end'
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: true
                    }
                }
            },
            elements: {
                bar: {
                    borderRadius: 10,
                }
            }
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
        <div className="card">
            <div className=''>
                <h2 className='font-montserrat text-xl font-semibold'>Activities</h2>

                <div className="inline-block text-gray-500 z-50 mb-10">

                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        dateFormat="MMM yyyy"
                        className="p-2 border-none bg-transparent rounded leading-5 font-montserrat text-xs font-normal focus:outline-none focus:ring focus:border-blue-300"
                        placeholderText="Select a date range"
                    />

                </div>
            </div>
            <div className=''>
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}