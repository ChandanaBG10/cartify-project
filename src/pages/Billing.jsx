import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Billing = () => {
    let {id}=useParams()
    
    const [product, setProduct]=useState({})
    const [quantity, setQuantity]=useState(1)
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("")
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then(x=>setProduct(x.data))
        .catch(err=>console.log(err))
    },[])
    function increment(){

        setQuantity(quantity+1)
    }
    function decrement(){
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
        
    
    function order(e){
        e.preventDefault()
        let orderData={
            productId:product.id,
            productName:product.name,
            productPrice:product.price,
            productImage:product.img,
            productQuantity:product.quantity,
            totalPrice:product.price*quantity,
            customer:{
                name:name,
                email:email,
                phone:phone,
                address:address
            },
            date:new Date().toLocaleString(),
            status:"pending"
        }
        axios.post("http://localhost:3000/orders", orderData)
        .then(()=>{
            toast.success("Order Placed successfully")
            navigate("/productspage")
        })
        .catch(err=>console.log(err))
    }
    

  return (
    <div>
        <Navbar/>
        <h1 className="billing-heading">Billing Page</h1>
        <div className="billing-container">
            <img src={product.img} alt=""  height={"200px"}/>
        <h2>Price: {product.name}</h2>
        <div className="quantity-section">
            <button onClick={decrement}>Decrement</button>
            <h2>{quantity}</h2>
            <button onClick={increment}>Increment</button>
        </div>
        <center>
            <form action="" onSubmit={order}>
                <input type="text" placeholder='Enter the name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <input type="text" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                <input type="text" placeholder='Enter the Phone Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} /><br/>
                <textarea placeholder="Enter Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea><br/>
                <button>Order</button>
            </form>
        </center>
        </div>

      
    </div>
  )
}

export default Billing
