import React from 'react';
import { useState } from 'react';
import { useLoaderData ,useNavigate} from 'react-router-dom';
import { deleteShoppingCart,removeFromDb} from '../../utilities/fakedb';
import { Cart } from '../Cart/Cart';
import OrderReview from '../Order Review/OrderReview';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const Orders = () => {
    const {LoadedProducts , selectedProducts} = useLoaderData();
    const [cart,setCart] = useState(selectedProducts);
    const navigate  = useNavigate();


    const removeItem =(id)=>{
    
      console.log('Remove Item clicked',id);
      const updatedCart = cart.filter(remainingProduct => remainingProduct._id !== id);
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
            key ={ item._id}
            item = {item}
            removeItem = {removeItem}
            ></OrderReview>)
      }
      
        </div>
        <div className="cart-container">
        <Cart cart = {cart}></Cart>
        <button className='clear-cart' onClick={()=>clearCart()} >Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
        <button className='clear-cart' onClick={()=>navigate('/shipping')} >Proceed Order <FontAwesomeIcon icon={faArrowRight} /></button>          
        </div>
       
    </div>
  );
};

export default Orders;