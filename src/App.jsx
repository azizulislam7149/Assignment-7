import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Show from './components/Show';
import DataShow from './components/DataShow';
import HistoryShow from './components/HistoryShow';
import Footer from './components/Footer';
import Selected from './components/Selected';

const App = () => {
        const [dataQueue, setDataQueue] = useState([])


          const addDataToQueue = data =>{

           setDataQueue([...dataQueue, data])
          }
 
          console.log(dataQueue);
  return (
    <div>
      

     
      <Navbar></Navbar>
      <Banner></Banner>
      <Show></Show>
      <section className='flex flex-col md:flex-row gap-6'>
      <DataShow></DataShow>
      <HistoryShow addDataToQueue ={addDataToQueue}></HistoryShow>
      </section>
      <Selected Selected={Selected}></Selected>

      <Footer></Footer>

    </div>
  );
};

export default App;