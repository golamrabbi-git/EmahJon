import { React, useContext, useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';

const Login = () => {

  const {SignIn} = useContext(AuthContext);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleLogin=e=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SignIn(email,password)
    .then((data) => {
     const user = data.user;
      form.reset();
      navigate(from,{replace:true});
    })
    .catch((error) => {
      const errorCode = error.code;
      setError(errorCode);
    });

   
  }



    return (
      <>
    <div className='login-container'>
        <h1 className='text-center'>Login</h1>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name ="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name = "password" placeholder="Password" required />
      </Form.Group>
      
      
      <Button type= 'submit' variant="warning" size="lg">
        Login
      </Button>

      <p className='mt-2'><small>New User?</small> <Link to = '/signup'>Create account</Link></p>

    </Form>
    <p className='error-msg'><small>{error}</small></p>
     
    
    </div>

    </>
    );
};

export default Login;