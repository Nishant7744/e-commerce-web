import React from 'react';
import './NewCollection.css';
// import new_collection from '../assests/new_collections';
import Item from '../items/Item';
import { useState } from 'react';
import { useEffect } from 'react';

const NewCollection = () => {

  const[new_collection,setNew_Collection]=useState([])

  useEffect(()=>{

      fetch('http://localhost:4000/newcollection')
      .then((response)=>response.json())
      .then((data)=>setNew_Collection(data));
  },[])

  return (
    <div className='new-collection' data-aos="fade-in" data-aos-duration="4000">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i)=>{

                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default NewCollection
