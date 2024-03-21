import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assests/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartitem2,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>

        <div className="cartitems-format-main">
            {/* <p>Products</p>
            <p>title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

            <hr /> */}

            {all_product.map((e)=>{

                if(cartitem2 [e.id] > 0)
                {
                    return  <div>
                    <div className="cartitems-format  cartitems-format-main ">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p><span>price:</span> ${e.new_price}</p>
                        Quantity:<button className='cartitems-quantity'>{cartitem2[e.id]}</button>
                        <p><span>Total:</span>${e.new_price*cartitem2[e.id]}</p>
    
                        <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
    
                    <hr />
                </div>
                }

                return null;

            })}

            <div className="cartitems-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />

                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have promo code,Enter it here</p>

                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

           
        </div>
      
    </div>
  )
}

export default CartItems;
