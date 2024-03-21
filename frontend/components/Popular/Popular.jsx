import React from 'react';
import './Popular.css';
import data_product  from '../assests/data';
import Items from '../items/Item';
import Item from '../items/Item';
import { useState } from 'react';
import { useEffect } from 'react';

const Popular = () => {

  const[popularProducts,setPopularProducts]=useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:4000/popularinwomen')
  //   .then((response)=>response.json())
  //   .then((data)=>setPopularProducts(data));

  // },[])

  return (
    <div className='popular' data-aos="fade-in" data-aos-duration="1000">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
          
            {data_product.map((item,i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular;
