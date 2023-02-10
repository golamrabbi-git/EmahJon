import React from 'react';
import './Shop.css';
import {useState,useEffect} from 'react';
import { Product } from '../Product/Product';
import {Cart} from '../Cart/Cart'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import Orders from '../Orders/Orders';
 
export const Shop = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState([]);


    useEffect(()=>{
      const storedCart = getStoredCart();
      const savedCart= [];
    
      for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
    },[products])
  
    const handleAddtocart = (product)=>{
      const newCart = [...cart,product];
      setCart(newCart);
      addToDb(product.id);
    }
  
  return (
    <div className='shop-container'>
        <div className="products-container">
          {
            products.map(product =><Product 
              key = {product.id}
              product = {product}
              handleAddtocart = {handleAddtocart}
            ></Product>)
          }
        </div>
        <div className="cart-container">
           <Cart cart = {cart}></Cart>
           
        </div>
       
    </div>
  )
}

