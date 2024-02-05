import React, {  useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, buyProduct, fetchProducts } from './redux/productActions'


function Product() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(()=>{
    console.log("🚀 ~ Product ~ products:", products)
 dispatch(fetchProducts())
    },[dispatch])
    let lastId=products.length>0?products[products.length-1].id:1
    const  [product ,setProduct]=useState({
        title:"",
        price:0,
        id:lastId+1
    })
    return (
        <div>
<div>
{products && products.map((p)=><div key={p.id}><h1>{p.title}</h1> <button onClick={(e)=>{
    e.preventDefault()
    dispatch(buyProduct(p.id))
}}>delete</button></div>)}

</div>


            <form action="">

                <label htmlFor="">product title</label>
                <input type="text" onChange={(e)=>setProduct({...product,title:e.target.value})}/>
                <label htmlFor="">price</label>
                <input type="number" name="" id="" onChange={(e)=>setProduct({...product,price:e.target.value})}/>
<button onClick={(e)=>{ 
    e.preventDefault()
    dispatch(addProduct(product))}}>submit</button>
            </form>
        </div>
    )
}

export default Product
