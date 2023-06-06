import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoaders = async()=>{
    //get products from api
    const productsLoadfromApi = await fetch('http://localhost:5000/products');
    const {products} = await productsLoadfromApi.json();

    
    //get the cart from localstorage
    const savedCart = getStoredCart();
    const selectedProducts = [];
    for(const id in savedCart){
       const addedProducts = products.find(product => product._id === id);
      if(addedProducts){
        const quantity = savedCart[id];
        addedProducts.quantity = quantity;
        selectedProducts.push(addedProducts);
      }      
    }
    return {Products : products,selectedProducts :selectedProducts};
    
}