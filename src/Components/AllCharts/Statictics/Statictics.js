import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

import './Statictics.css'

const data = [
    {
        name: "Sun",
        uv: .5,
        pv: 2400,
        amt: 2400,
        value: 0
    },
    {
        name: "Mon",
        uv: 8,
        pv: 1398,
        amt: 2210,
        value: 2
    },
    {
        name: "Tue",
        uv: 4.8,
        pv: 9800,
        amt: 2290,
        value: 4
    },
    {
        name: "Wed",
        uv: 6,
        pv: 3908,
        amt: 2000,
        value: 6
    },
    {
        name: "Thu",
        uv: 9,
        pv: 4800,
        amt: 2181,
        value: 8
    },
    {
        name: "Fri",
        uv: 9,
        pv: 3800,
        amt: 2500,
        value: 10
    },
    {
        name: "Sat",
        uv: 10,
        pv: 4300,
        amt: 2100
    }
];

const Statictics = () => {

    return (
        <div>
            <div className='d-flex justify-content-between pt-3'>
                <div>
                    <h3 className='fw-bold'>Your statistics</h3>
                    <h4>Overview</h4>
                </div>
                <div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='fw-bold mt-1'>Graph</h4>
                        <div className='toggole'>
                            <div className="form-check form-switch">
                                <input className="form-check-input fs-3" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                <label className="form-check-label" for="flexSwitchCheckChecked"></label>
                            </div>
                        </div>
                    </div>
                    <h5 className='text-secondary dropdown-toggle'>Show: <small className='text-primary'>Monthly</small></h5>
                </div>
            </div>
            <div className='d-flex'>
                <p className='active-user'>Active user</p>
                <p className='text-secondary ms-3'>Attendance</p>
                <p className='text-secondary ms-3'>Hour spent</p>
                <p className='text-secondary ms-3'>Enrolled</p>
                <p className='text-secondary ms-3'>Question resolved</p>
                <p className='text-secondary ms-3'>Quiz score</p>
            </div>
            <LineChart
                className='LineChart-style'
                width={850}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="5" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="blue"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
};

export default Statictics;