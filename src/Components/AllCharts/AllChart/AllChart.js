import React from 'react';
import PieCharts from '../PieCharts/PieCharts';
import Statictics from '../Statictics/Statictics';

import './AllChart.css'

const AllChart = () => {
    return (
        <div>
            <div className='row mt-3'>
                <div className='pie-chart-upper-text col-3'>
                    <h5>Course</h5>
                    <small className='text-secondary'>Total course assigned</small>
                    <div style={{ height: '274px' }} className='d-flex justify-content-center align-items-center'>
                        <PieCharts></PieCharts>
                    </div>
                </div>
                <div className='col-8 ms-5 bg-white'>
                    <Statictics></Statictics>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-3 announcement'>
                    <h4>Announcement</h4>
                </div>
                <div className='col-8'>
                    <h5>ds</h5>
                </div>
            </div>
        </div>
    );
};

export default AllChart;