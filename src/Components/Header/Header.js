import React from 'react';
import header from '../../img/header.png'
import profile from '../../img/profile.png'

import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="row mt-2">
                <div className="col-2 text-start ">
                    <img width={150} src={header} alt="" />
                </div>
                <div className="col-6 text-start">
                    <button style={{
                        width: '110px',
                        height: '40px'
                    }} className="btn btn-primary ms-5 text-white fw-bold dropdown-toggle" type="button">
                        Explore
                    </button>
                    <input className='search-filed mt-3 ps-3' placeholder='Search course' type="text" />
                </div>
                <div className="col-4 text-end mt-2">
                    <div className='d-flex justify-content-end'>
                        <div className='mt-1'>
                            <span className='fs-5 me-2 fw-bold'><i className="far fa-bell"></i></span>
                            <img width='60px' height='50px' src={profile} alt="" />
                        </div>
                        <div className='m-2'>
                            <h6>Jane Doe</h6>
                            <p className='text-secondary'>
                                <small>987654321</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;