import React, { createContext, useState,useEffect } from "react";
 import all_product from '../components/assests/all_product';
import Item from "../components/items/Item";

export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart = {};
     for(let index = 0; index < all_product.length+ 1; index++)
     {
        cart[index] = 0;
     }

     return cart;
}

const ShopContextProvider = (props) =>{


    // const [all_product,setAll_Products]=useState([]);
    const [cartitem2,setCartItems] = useState(getDefaultCart());

    // useEffect(()=>{

    //     fetch('http://localhost:4000/allproducts')
    //     .then((response)=>response.json())
    //     .then((data)=>setAll_Products(data))
    // },[])

    

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemID":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
        
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }

    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const item in cartitem2)
        {
            if(cartitem2[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price * cartitem2[item];
            }

            
        }

        return totalAmount;
    }

    const getTotalCartItems =()=>{
        let totalItem=0;
        
        for(const item in cartitem2)
        {
            if(cartitem2[item]>0)
            {
                totalItem += cartitem2[item];
            }
        }

        return totalItem;
    }


    
    const contextValue ={getTotalCartItems,getTotalCartAmount,all_product,cartitem2,addToCart,removeFromCart};
    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;