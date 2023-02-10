import React from 'react'
import '../Cart/Cart.css'
import { deleteShoppingCart } from '../../utilities/fakedb';

 const Cart = (props) => {
    const {cart} = props;
     let total = 0; let shipping = 0; let quantity =0,tax = 0;
     for( const product of cart){
      quantity = quantity + product.quantity;
        total += product.price;
        shipping += product.shipping;
        tax = parseFloat((total*0.1).toFixed(2));

     }
  return (
    <div className='cart'> <h4>Order Summary</h4>
    <p>Selected Items : {cart.length}</p>
    <p>Total Price:${total}</p>
    <p>Total Shipping:${shipping}</p>
    <p>Tax:${tax}</p>
    <h3>Grand Total:${total+shipping+tax}</h3>


    </div>
    
  )
}

export {Cart};