import {React,useContext }from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import { Badge } from 'react-bootstrap';
import './Header.css'




 const Header = () => {
  const {user,logOut} = useContext(AuthContext);
 

  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div>
          
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to = "/orders">Orders</Link>
          <Link to = "/shipping">Shipping</Link>
          <Link to="/about">About</Link>
          {user?.uid ?
          <Badge  onClick={logOut} className='pill bg-danger'>
          SignOut
        </Badge>
          :
          <>
          <Link to="/signup">Signup</Link>
          <Link to = "/login">Login</Link>
          </>
          }
        </div>
        </nav>
  )
}


export{Header};