
import './App.css';
import Main from './Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { Shop } from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import { productAndCartLoaders } from './APIs/ProductAndCartLoader';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/Routes/PrivateRoute';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      
        {
          path:'signup',element:<Signup></Signup>

        },
        {path:'login',element:<Login></Login>},
        {
          path:"/",
          loader:()=>fetch('http://localhost:5000/products') ,
          element:<Shop></Shop>
    
        },
        {
          path:"/shop",
          element:<Shop></Shop>
        },
        {
          path:'/shipping',
          element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        
        {
          path:'/about',
          element:<About></About>
        }
        ,
        {
          path:'/inventory',
          element:<Inventory/>
        },
        {
          path:'/orders',
          loader:productAndCartLoaders,
          element :<Orders></Orders>
        }

      ]
    },

  
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
