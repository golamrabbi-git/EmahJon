import React from 'react';
import './Shop.css';
import {useState,useEffect, } from 'react';
import { Product } from '../Product/Product';
import {Cart} from '../Cart/Cart'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import {useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
 
export const Shop = () => {
    const [cart,setCart] = useState([]);
    const [page,setPage] = useState(0);
    const [size,setSize] = useState(10);
    const [count,setCount] = useState(0);
    const [products,setProducts]= useState([]);



    useEffect(()=>{
      const url = `http://localhost:5000/products?page=${page}&size=${size}`;
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setCount(data.count);
        setProducts(data.products);
      })
    },[page,size])

    const pages = Math.ceil( count / size);
    const navigate  = useNavigate();
    const savedCart= [];
    useEffect(()=>{
      const storedCart = getStoredCart()
      const cartKeys = Object.keys(storedCart);

      fetch('http://localhost:5000/productsstored',{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(cartKeys)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
       
        for(const id in storedCart){
          const addedProduct = data.find(product => product._id === id);
          if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);

      })
    },[products])
  
    const handleAddtocart = (product)=>{
      const newCart = [...cart,product];
      setCart(newCart);
      addToDb(product._id);
    }
  
  return (
    <div className='shop-container'>
        <div className="products-container">
          {
            products.map(product =><Product 
              key = {product._id}
              product = {product}
              handleAddtocart = {handleAddtocart}
            ></Product>)
          }
        </div>
        <div className="cart-container">
           <Cart cart = {cart}></Cart>
           <Button className='w-50' onClick={()=>navigate('/orders')} variant="primary">Review Order</Button>
           
        </div>
        <div className="pagination">
          {
            [...Array(pages).keys()].map(number => <button
             key = {number}
             className={page === number && 'selected'}
             onClick={()=>setPage(number)}
            >{number+1}
            </button> )
          }
          <select onChange={event => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          </select>
        </div>
        
    </div>
  )
}

