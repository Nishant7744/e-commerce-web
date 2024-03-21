import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import addproduct from '../../assets/cart-icon.png';
import listicon from '../../assets/list-icon.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={addproduct} className='cart-icon' alt="" />
            <p>Add Product</p>
        </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={listicon} className='list-icon' alt="" />
            <p>List Product</p>
        </div>
      </Link>

    </div>
  )
}

export default Sidebar

