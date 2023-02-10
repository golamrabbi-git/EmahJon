import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Product = (props) => {
    const{name,img,seller,price,ratings} = props.product;
   
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <p className='product-name'>{name}</p>
        <p>Price:${price}</p>
        <p><small>Manufacturer:{seller}</small></p>
        <p><small>Rating:{ratings}/5</small></p>
        </div>

        <button onClick={()=>props.handleAddtocart(props.product)} className='btn-cart'>Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  )
}
