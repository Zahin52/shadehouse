import React, { useEffect, useState } from 'react'
// import Card from '../card/card'
import ProductCard from '../ProductCard/ProductCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Spinner from '../Spinner/Spinner'

export default function ExploreProducts() {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      fetch('https://young-garden-78643.herokuapp.com/products')
         .then((res) => res.json())
         .then((data) => {
            setProducts(data)
            setLoading(false)
         })
   }, [])
   console.log(products)
   return (
      <div>
         <Header />
         {loading ? (
            <Spinner />
         ) : (
            <div className="container">
               <div>
                  <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-secondary px-4 py-2 ">
                     All Products
                  </h1>
               </div>
               <div className=" " style={{ 'min-height': '100vh' }}>
                  <div className="row row-cols-1 row-cols-lg-3  mx-auto justify-content-center my-4 text-capitalize">
                     {products.map((data, i) => (
                        <ProductCard key={i} info={data} />
                     ))}
                  </div>
               </div>
            </div>
         )}

         <Footer />
      </div>
   )
}
