import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const DataShow = ({addDataToQueue}) => {
        const[datas, setData]= useState([])

        useEffect(() =>{
                fetch('../../public/fake.json')
            .then(res => res.json())
            .then(data => setData(data));
        },[])

        console.log(datas);

    return (
        <div className='md:w-2/3'>
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
   {
            datas.map(data => 
                <div key={data.playerId} className="card bg-base-100 shadow-xl">
                <figure>
                  <img className='w-96 h-80 rounded-lg '
                    src={data.image}
                    alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name:{data.name}</h2>
                  <p>Country :{data.country}</p>
                  <p>Role :{data.role}</p>
                  <p>battingType :{data.battingType}</p>
                  <p>bowlingType :{data.bowlingType}</p>
                  <p>biddingPrice :{data.biddingPrice}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => addDataToQueue(data)} className="btn btn-primary">Choose Player</button>
                  </div>
                </div>
              </div>
              
              )
            }
   </div>
           
        </div>
    );
};

export default DataShow;