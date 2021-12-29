import React from 'react';

const SideNav = () => {
    return (
        <div>
            <div className='ms-4 text-start'>
                <h5 className='sizing '><span><i class="fas fa-home me-1"></i></span> Home</h5>
                <h5 className='sizing'><span><i class="fas fa-chalkboard me-1"></i></span> My learning</h5>
                <ul style={{ color: '#707070' }} className='ms-3 '>
                    <li>Course</li>
                    <li>Specialization</li>
                </ul>
                <h5 className='sizing'><span><i class="fas fa-award me-1"></i></span> Learning path</h5>
                <h5 className='sizing'><span><i class="fas fa-chart-bar me-1"></i></span> Performance</h5>
                <h5 className='sizing'><span><i class="fas fa-shopping-cart me-1"></i></span> Cart</h5>
                <h5 className='sizing'><span><i class="fas fa-cog me-1"></i></span> Settings</h5>
                <div>
                    <i class="fas fa-code margin"></i>
                </div>
            </div>
        </div>
    );
};

export default SideNav;