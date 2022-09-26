

import React, { useState } from 'react';
import Searchh from './Searchh';

const Search = ({products, onAddToCart}) => {

    const [query,setQuery] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [loc, setLoc] = useState("");
    //onst [filteredData, setFilteredData] = useState([])

    

    // if(name){
    //     setFilteredData(products.filter((products) => products.name.toLowerCase().includes(name)))
    // }
    // else{
    //     if(loc){
    //         setFilteredData(products.filter((products) => products.loc.toLowerCase().includes(loc)))
    //     }
    //     else{
    //         setFilteredData(products.filter((products) => products.price === price))
    //     }
    // }

    // console.log(filteredData)


    
    //console.log(products.filter(products=>products.name.includes("co")));




    console.log(products)
    return(
        // <div className="appp mt-[750px]">
        //     <input type="text" placeholder="Name" className="search" onChange={(e) => setName(e.target.value)}/>
        //     <br></br>
        //     <input type="number" placeholder="Price" className="search" onChange={(e) => setPrice(e.target.value)}/>
        //     <br></br>
        //     <input type="text" placeholder="Location" className="search" onChange={(e) => setLoc(e.target.value)}/>
        //     <br></br>
        //     <input type="text" placeholder="Type" className="search" onChange={(e) => setQuery(e.target.value)}/>
        //     <br></br>
            


        <div>
        <div className='card h-[75px] w-screen flex items-center justify-around absolute mt-auto top-[70vh]'>
        <input placeholder='Name' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' onChange={(e) =>setName(e.target.value)} />
        <input placeholder='Price' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' onChange={(e) =>setPrice(e.target.value)}/>
        <input placeholder='Location' className='px-4 py-2 bg-transparent border-2 border-white rounded-m' onChange={(e) =>setLoc(e.target.value)} />
        <input placeholder='House' className='px-4 py-2 bg-transparent border-2 border-white rounded-m'onChange={(e) =>setQuery(e.target.value)}/>
        </div>


            {/* <ul  className="list flex flex-wrap ">
             <ul className=" w-screen absolute mt-auto top-[95vh]" container justify="center"  spacing ={40}>
                {products.filter((products)=> products.name.toLowerCase().includes(name)).filter((products )=>products.price.formatted.includes(price)).filter((products)=>products.description.toLowerCase().includes(loc)).map((product) => (
                    <ul item key={product.id} xs={12} sm={6} md={6} lg={3} className="">
                         < Searchh product={product}  />
                         </ul> 
                ))}


            </ul>  
               
  
            </ul> */}
            <div className='flex flex-wrap w-full xl:mx-3 mt-[640px]'>
                <div className='overflow-hidden  flex flex-wrap w-screen '>
                    {products.filter((products) => products.name.toLowerCase().includes(name))
                        .filter((products) => products.price.formatted.includes(price))
                        .filter((products) => products.description.toLowerCase().includes(loc))
                    .map((prod)=>(<Searchh product={prod} />))}
                </div>
            </div>
        </div>
    );
}

// {products.filter((products)=> products.name.toLowerCase().includes(name)).map((product) =>(
                
              
//     <Grid item key = {product.id} xs={12} sm={6} md={6} lg={3}>
//     < Searchh product={product}  />
//     </Grid> 
            
  

   
// ))}



export default Search;