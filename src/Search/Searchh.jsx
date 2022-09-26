import React from 'react'
import './style.css';

const Searchh = ({product }) => {
 // console.log(product.id)
  return (
    // <div className='yoo'>
    // <div className='wrap'>
    //   <div className=' h-[355px] w-[306px] border-2 bg-black ' >
    //       <div className='cardd text-white h-0 py-8'>
    //       <img src={ product.image.url} className='h-[195px] w-full'/>
    //         <div className='flex flex-col z-999'>
    //           <div className='z-999'>{product.name}</div>
    //       <div className='info text-white'>{ product.price.formatted}
    //       <p className='info text-white'>{product.description}</p>
    //       </div>
    //       </div>
    //       </div>
    // </div>
    // </div>
    // </div>

  //   .card {
  //     backdrop-filter: blur(5px) saturate(180%);
  //     -webkit-backdrop-filter: blur(5px) saturate(180%);
  //     background-color: rgba(255, 255, 255, 0.35);
  //     border-radius: 12px;
  //     border: 1px solid rgba(209, 213, 219, 0.3);
  // }

    <div className='group flex flex-col items-center justify-center bg-[#E8E1DB]  h-[355px] w-1/3 border-2 hover:bg-gradient-to-t from-[#b8b6dd]  before:content-[" "] before:absolute before:w-2 before:h-2 '>
        <div className='group-hover:blur flex flex-col items-center justify-center'>
        <img src={ product.image.url} className='h-[200px] w-[200px] ' alt='helo'  />
        <p  className='text-black pt-3'>{product.name}</p></div>
      <div className=' flex flex-col w-full items-center  bg-[#E8E1DB]  justify-center mt-[15px] '>
        
        <p className='text-[#E8E1DB] group-hover:text-black group-hover:blur-[0px]'>{product.price.formatted}</p>
        <p className='text-[#E8E1DB] group-hover:text-black group-hover:blur-[0px]'>{ product.description.replace(/(<([^>]+)>)/ig, '') }</p>
      </div>
    </div>

  )
}
// before:bg-gradient-to-r from-blue-500 :to-transparent
export default Searchh