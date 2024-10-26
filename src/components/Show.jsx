import React from 'react';
import Selected from './Selected';

const Show = () => {
    return (
        <div className='flex mx-9 my-9'>
            <div className='text-2xl font-bold  w-2/3   '>
            <h2>Available Players</h2>

            </div>
            <div className='flex gap-6'>
            <button className="btn btn-success text-xl font-bold" >Available</button>
            <button className="btn btn-warning text-2xl font-bold" onClick={Selected()}>Selected (4)</button>
            </div>
            
        </div>
    );
};

export default Show;