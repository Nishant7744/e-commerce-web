import React, { useContext } from 'react';
import './ProductDisplay.css';
import start_icon from '../assests/star_icon.png';
import start_dull_icon from '../assests/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay' data-aos="fade-in" >

        <div className="productdisplay-left">

        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>

        <div className="productdisplay-right">

            <h1>{product.name}</h1>

            <div className="productdisplay-right-star">

                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_icon} alt="" />
                <img src={start_dull_icon} alt="" />

                <p>(122)</p>
            </div>

            <div className="productdisplay-right-prices">
                <div className=' productdisplay-right-price-old' >${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>

            <div className="productdisplay-right-description">

                A lightweight, usually kinitted,pullover shirt, close-fitting and a round neckline and short sleeve worn as an undershirt or outershirt garment.
            </div>

            <div className="productdisplay-right-size">
                <h1>Select Size</h1>

                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span> Women,T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span> Modern,Latest,</p>


        </div>
      
    </div>
  )
}

export default ProductDisplay
