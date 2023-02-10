import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart,removeFromDb,getStoredCart } from '../../utilities/fakedb';
import { Cart } from '../Cart/Cart';
import OrderReview from '../Order Review/OrderReview';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
    const {LoadedProducts , selectedProducts} = useLoaderData();
    const [cart,setCart] = useState(selectedProducts);

    const removeItem =(id)=>{
      const updatedCart = cart.filter(remainingProduct => remainingProduct.id !== id);
      setCart(updatedCart);
      removeFromDb(id)
      
    }
    const clearCart = ()=>{
      setCart([]);
      deleteShoppingCart();
    }

    
    
    return (
        <div className='shop-container'>
        <div className="order-container">
      {
          cart.map(item=> <OrderReview 
            key ={ item.id}
            item = {item}
            removeItem = {removeItem}
            ></OrderReview>)
      }
        </div>
        <div className="cart-container">
        <Cart cart = {cart}></Cart>
        <button className='clear-cart' onClick={()=>clearCart()} >Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
        
        </div>
       
    </div>
  );
};

export default Orders;