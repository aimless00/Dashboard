import React from 'react';
import PieCharts from '../PieCharts/PieCharts';
import Statictics from '../Statictics/Statictics';

const AllChart = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <h3>Pie Charts</h3>
                    <PieCharts></PieCharts>
                </div>
                <div className='col-9'>
                    <h3>Liner Charts</h3>
                    <Statictics></Statictics>
                </div>
            </div>
        </div>
    );
};

export default AllChart;