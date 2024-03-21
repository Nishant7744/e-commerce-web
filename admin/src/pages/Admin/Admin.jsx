import React from 'react';
import './Admin.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom';
import AddProduct from '../../components/AddProduct/AddProduct';
import ListProuct from '../../components/ListProduct/ListProuct';

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/listproduct' element={<ListProuct/>} />
        </Routes>
      
    </div>
  )
}

export default Admin
