import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import './BarCharts.css'

const BarCharts = () => {
    const data = [
        {
            name: "Monday",
            uv: 8500,
            pv: 1400,
            amt: '0k'
        },
        {
            name: "Tuesday",
            uv: 8500,
            pv: 2898,
            amt: '25k'
        },
        {
            name: "Wednesday",
            uv: 8500,
            pv: 2800,
            amt: '50k'
        },
        {
            name: "Thursday",
            uv: 8500,
            pv: 2408,
            amt: '75k'
        },
        {
            name: "Friday",
            uv: 8500,
            pv: 5800,
            amt: '100k'
        },
        {
            name: "Saturday",
            uv: 8500,
            pv: 5800,
            amt: '100k'
        },
        {
            name: "Sunday",
            uv: 8500,
            pv: 5600,
            amt: '100k'
        }
    ];
    return (
        <div>
            <div>
                <h5 className='bold pt-1'>Visitors</h5>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='fw-bold'>254,845</h1>
                    <small className='text-secondary p-1'>Most Visited</small>
                    <small className='active-users'>Introduction to hadoop</small>
                    <small className='active-users'>Introduction to hadoop</small>
                    <small className='active-users'>Introduction to hadoop</small>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <p className='me-5 text-secondary'>New/Returning</p>
                        <p className=' text-secondary'>45,762/2491</p>
                    </div>
                    <div >
                        <ul className='d-flex justify-content-start align-items-center'>
                            <li className='me-5 text-primary'>New visitors</li>
                            <li className='me-5 text-info'>Returning visitors</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BarChart
                width={850}
                height={270}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#4318FF" />
                <Bar dataKey="pv" fill="#6AD2FF" />
            </BarChart>
        </div>
    );
};

export default BarCharts;