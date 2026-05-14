import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  let navigate=useNavigate()
  return (
    <>
    <Navbar/>
      <div className="hero-section">
        <h1>Welcome to <span style={{color:"orange"}}>Cartify</span>🛒</h1>
        <h2>Discover the best products at unbeatable prices</h2>
        <button onClick={()=>{navigate("/productspage")}}>Shop now</button>
      </div>

      <h1 className="category-title">Shop by Category</h1>

      <div className="products">
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/1/QZ/AO/RT/142262681/istockphoto-1301394040-170667a.jpg" alt="" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/068/733/167/small/the-apple-products-that-are-on-the-table-uniquely-crafted-for-your-design-needs-photo.jpg" alt="" />
        <img src="https://dalpl.co.in/wp-content/uploads/2024/05/bigstock-Wicker-Basket-With-Assorted-Or-56073449.jpg" alt="" />
        <img src="https://images.creativemarket.com/0.1.0/ps/3763165/1820/1466/m1/fpnw/wm1/mtgy1denzgfzalhgrid4iy5x4renf7tkhif3ubjzqkmclmvz5vo1gavoyxqht5tp-.jpg?1513841434&s=01514747aae43172b41e61b357ccbbbe" alt="" />
      
      </div>
      
      <div className="products">
        <img src="https://i.pinimg.com/originals/36/91/8c/36918c905ae93a6c7c601c4b619176ac.jpg" alt="" />
        <img src="https://th.bing.com/th/id/OIP.wv3zykx0VueE0nHZFM-9nAHaE5?w=267&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        <img src="https://wallpapers.com/images/hd/colorful-stationery-collection-mdidhpsv5d67d055.png" alt="" />
        <img src="https://th.bing.com/th/id/OIP.E3QFUfL17YW3xl7yZg6YHQHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
      </div>

      <div className="products">
        <img src="https://th.bing.com/th/id/OIP.dbAnlNUOlsDda6O3CC3ozwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        <img src="https://static.vecteezy.com/system/resources/previews/026/446/302/non_2x/beauty-set-collection-eyeshadow-palette-lipstick-variation-and-mascara-generated-by-ai-free-photo.jpg" alt="" />
        <img src="https://galaxybags.com.pk/cdn/shop/files/Alkaram_Alkaram_Lawn_1.jpg?v=1726671821" alt="" />
        <img src="https://img.freepik.com/premium-psd/yellow-dress-with-yellow-dress-transparent-background_911060-63818.jpg?w=2000" alt="" />
      </div>
    </>
  )
}

export default Homepage