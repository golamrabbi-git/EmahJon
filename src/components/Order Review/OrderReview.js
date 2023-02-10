import React from 'react';
import './OrderReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OrderReview = ({item,removeItem}) => {
    const {id,name,price,stock,img,quantity} = item;
    return (
         <div className='review-item'>
            <img src={img} alt="" />
           <div className="review-details-container">
            <div className="review-details">
                <p>{name}</p>
                <p><small>Price :<span className='span'>${price}</span></small></p>
                <p><small>Quantity:{quantity}</small></p>
                <p><small>Stock :{stock}</small>
                </p>
            </div>
            <div className="delete-btn">
                <button onClick={()=>removeItem(id)} className='rem-btn'><FontAwesomeIcon className='btn-icon' icon={faTrashCan} /></button>

            </div>
           </div>
        </div>
    );
};

export default OrderReview;