import { ADD_PRODUCT, ADD_PRODUCTS, BUY_PRODUCT } from "./actionTypes"

export const addProduct= (product)=>{return{

    type:ADD_PRODUCT,
    payload:product

}}
export const buyProduct=(id)=>{
    return{
        type:BUY_PRODUCT,
        payload:id
    }
}


export const fetchProducts=function(){
return async (dispatch)=>{
   const data=await fetch('https://fakestoreapi.com/products')
         const products=await data.json()
         dispatch(addProducts(products)) 
     
}}
export const addProducts=(data)=>{
    return{
        type:ADD_PRODUCTS,
        payload:data
    }
}