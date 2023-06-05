import React, { useState ,useContext} from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Signup.css';

const Signup = () => {
  const {CreateUser} = useContext(AuthContext);

  const [error,setError] = useState('');
  const handleSubmit =e=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm);
    if(password !== confirm ){
      setError('Password does not matched!!');
      return;
    }
    if(password.length < 6 ){
      setError('Password should be atleast 6 characters.')
      return;
    }
    CreateUser(email,password)
    .then (data =>{
      const user = data.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      setError(errorCode);
    });

    form.reset();

    
  }
    return (
        <div className='signup-container'>
            <h1 className='text-center'>Create Account</h1>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name ="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name = "password" placeholder="At least 6 characters" required />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name ="confirm" placeholder="Confirm Password" required />
      </Form.Group>
      
      
      <Button type='submit' variant="warning" size="lg">
        Sign Up
      </Button>

      <p className='mt-2'><small>Already have an account?</small> <Link to = '/login'>Login</Link></p>
    </Form>
    <p className='error-msg'>{error}</p>
            
    </div>
    );
};

export default Signup;