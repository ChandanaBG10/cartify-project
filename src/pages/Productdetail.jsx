import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Productdetail = () => {
  let {id}=useParams()
  let navigate = useNavigate()
  const [product, setProduct] = React.useState({})
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleNavigate(id){
    navigate(`/billing/${id}`)
  }

  return (

  <div>
    <Navbar/>

    <h1 className="detail-heading">Product Detail</h1>

    <div className="detail-container">
      
      <img src={product.img} alt="" />

      <div className="detail-info">
        <h2>{product.name}</h2>
        <h2>Price: ₹{product.price}</h2>
        <h2>Description: {product.description}</h2>
        <h2>Rating: ⭐ {product.rating}</h2>

        <button onClick={() => handleNavigate(product.id)}>
          Place Order
        </button>
      </div>

    </div>
  </div>

  )
}

export default Productdetail
