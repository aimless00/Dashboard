import React from 'react';
import BarCharts from '../BarCharts/BarCharts';
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
            <div className='row mt-3'>
                <div className='col-3 announcement'>
                    <h4>Announcement</h4>
                </div>
                <div className='col-8 bg-white ms-5'>
                    <BarCharts></BarCharts>
                </div>
            </div>
            <div className='row gy-3 mt-3'>
                <div className='col-4 last-div me-2'>
                    <h4 className='courses mt-3 mb-3'>Course in demand</h4>
                    <div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <p><i className="fas fa-book-reader text-primary fs-5 me-4"></i></p>
                            <p className='courses'>Introduction to hadoop <small className=' d-block text-start'>28 Employee</small></p>
                        </div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <p><i className="fas fa-book-reader text-primary fs-5 me-4"></i></p>
                            <p className='courses'>Getting started with hadoop<small className=' d-block text-start'>28 Employee</small></p>
                        </div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <p><i className="fas fa-book-reader text-primary fs-5 me-4"></i></p>
                            <p className='courses'>Introduction to hadoop<small className=' d-block text-start'>28 Employee</small></p>
                        </div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <p><i className="fas fa-book-reader text-primary fs-5 me-4"></i></p>
                            <p className='courses'>Introduction to hadoop<small className=' d-block text-start'>28 Employee</small></p>
                        </div>
                        <div className='d-flex align-items-center justify-content-start'>
                            <p><i className="fas fa-book-reader text-primary fs-5 me-4"></i></p>
                            <p className='courses'>Introduction to hadoop<small className=' d-block text-start'>28 Employee</small></p>
                        </div>

                    </div>
                </div>
                <div className='col-4 last-div ms-4 me-1'>
                    <h4 className='courses mt-3 mb-3'>Recent activity</h4>
                </div>
                <div className='col-4 last-div ms-4 me-1'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4 className='courses mt-3 mb-3'>Recent activity</h4>
                        <h6 className='text-secondary dropdown-toggle mt-2'>Show: <small className='text-primary'>Employee</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChart;