import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between text-3xl font-bold mx-8 my-8'>
           <div>
            <img src="https://i.ibb.co.com/3fPXShB/logo.png" alt="" />
            </div> 
            <ul className='flex gap-8 '>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                </ul> 
                <div><button className="btn btn-wide text-3xl font-bold">0 Coin</button></div>
          
        </div> 
    );
};

export default Navbar;