import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-items-center bg-gradient-to-br bg-pink-400'>
            
            <div className='mb-5'>
                <img src="https://i.ibb.co.com/pKzps6S/banner-main.png" alt="" />
            </div>
            <div className= 'text-2xl font-bold '>
                <h2>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className='m-5 p-5 bg-red-200 rounded-lg '>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;