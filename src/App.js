import React, { useState ,useEffect } from 'react'
import './App.css';
//import Products from './components/Products/Products';  
import {commerce} from './lib/commerce';
import {Search} from './indexx.js';

import second from './14052022112710.01.1 Pool Sunset.jpg'
import './App.css';
import { Parallax } from 'react-parallax';
import {MovingComponent} from 'react-moving-text'

function App() {


  const  [ products , setProducts] = useState([]);

  const fetchProducts = async() => {
    const {data} = await commerce.products.list();
    setProducts(data);
}

useEffect(() => {
    fetchProducts();


} , []);



  return (
    <>
    <div className="App">
      <Parallax blur={{ min: -15, max: 15 }} strength={-0} bgImage={second}  className="w-screen h-screen  absolute">
           
                <div className='flex items-center justify-center h-screen'>
                  <MovingComponent 
           type="flipFromTop"
           duration="2000ms"
           delay="2s"
           direction="normal"
           timing="ease"
           iteration="10"
                    fillMode="none"
                  className='text-[140px] text-white'>
           Welcome-to-Rental 
                  </MovingComponent></div>
      </Parallax>
        <div className='flex flex-col justify-between align-center mt-4 px-4 relative mt-[-665px] border-b-slate-200'>
          
        <div className='flex justify-end w-screen px-26 text-blue ml-[-3rem]'>
          <p className='text-xl text-gray-300 px-6'>Buy</p>
          <p className='text-xl text-gray-300 px-6'>Sell</p>
          <p className='text-xl text-gray-300 px-6'>Rent</p>
        </div>
        </div>
        
           {/* <div className='card h-[75px] w-screen flex items-center justify-around absolute mt-auto'>
        <input placeholder='search' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' />
        <input placeholder='search' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' />
        <input placeholder='search' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' />
        <input placeholder='search' className='px-4 py-2 bg-transparent border-2 border-white rounded-m'/>
        </div> */}
      
      </div>
      







      <Search products={products} className="h-screen mt-[1000px]"></Search>
      
   
      </>
  );
}

export default App;
