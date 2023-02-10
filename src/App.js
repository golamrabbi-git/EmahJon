
import './App.css';
import Main from './Layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { Shop } from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import { productAndCartLoaders } from './APIs/ProductAndCartLoader';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader:()=>fetch('https://mocki.io/v1/ade6d28c-29c0-42af-9d9f-115e1fab231e') ,
          element:<Shop></Shop>
    
        },
        {
          path:"/shop",
          loader:()=>fetch('https://mocki.io/v1/ade6d28c-29c0-42af-9d9f-115e1fab231e'),
          element:<Shop></Shop>
    
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
