import React from 'react';
import MainBody from '../MainBody/MainBody';
import './Body.css';
import SideNav from './SideNav/SideNav';

const Body = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2 side-navbar '>
                    <SideNav></SideNav>
                </div>
                <div className='col-10 main-body'>
                    <MainBody></MainBody>
                </div>
            </div>
        </div>
    );
};

export default Body;