import React from 'react';
import './MainBody.css';
import logo from '../../img/logo.png'
import AllChart from '../AllCharts/AllChart/AllChart';

const MainBody = () => {
    return (
        <div className='container'>
            <h2 className='head-text'>Performance</h2>

            <div className='row'>
                <div className='head-line col-9'>
                    <div>
                        <h5>Hello Jane !</h5>
                        <p className='text-secondary'>It’s good to see you again.</p>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className='end-button col-3 '>
                    <div>
                        <p className='text-white mt-3'>Download Report </p>
                        <small className="dropdown-toggle text-primary" type="text">
                            Last Week
                        </small>
                    </div>
                    <div className='download'>
                        <i class="fas fa-download mx-2 my-2"></i>
                    </div>
                </div>
            </div>
            <div className='search-field '>
                <div>
                    <p className='search-field-text '><small className='px-2'>Show</small><span className='text-primary '>Team </span> <span className='dropdown-toggle ms-2'></span></p>
                </div>
                |
                <div>
                    <input className='search-field-bar' placeholder='Search Team' type="text" />
                    <i class="fas fa-search text-secondary"></i>
                </div>
            </div>
            <AllChart></AllChart>
        </div>
    );
};

export default MainBody;