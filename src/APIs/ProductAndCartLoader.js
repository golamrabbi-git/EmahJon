import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoaders = async()=>{
    //get products from api
    const productsLoadfromApi = await fetch('https://mocki.io/v1/ade6d28c-29c0-42af-9d9f-115e1fab231e');
    const LoadedProducts = await productsLoadfromApi.json();
    
    //get the cart from localstorage
    const savedCart = getStoredCart();
    const selectedProducts = [];
    for(const id in savedCart){
       const addedProducts = LoadedProducts.find(product => product.id === id);
      if(addedProducts){
        const quantity = savedCart[id];
        addedProducts.quantity = quantity;
        selectedProducts.push(addedProducts);
      }      
    }
    return {LoadedProducts : LoadedProducts,selectedProducts :selectedProducts};
    
}