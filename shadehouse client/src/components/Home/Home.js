import React, { useEffect, useState } from 'react'

import Spinner from '../Spinner/Spinner'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Home() {
   const [productsInfo, setproductsInfo] = useState([])
   const [TestimonyInfo, setTestimonyInfo] = useState([])
   const [gallaryInfo, setgallaryInfo] = useState([])
   const [spinner, setSpinner] = useState(true)
   useEffect(() => {
      try {
         fetch('https://young-garden-78643.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setproductsInfo(data))
         fetch('https://young-garden-78643.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => setTestimonyInfo(data))
         fetch('https://young-garden-78643.herokuapp.com/gallary')
            .then((res) => res.json())
            .then((data) => setgallaryInfo(data))
      } catch (error) {
         console.log(error)
      } finally {
         setSpinner(false)
      }
   }, [])
   if (spinner) {
      return <Spinner />
   }
   return (
      <div>
         <Header />
         <div>
            <div className="banner ">
               <div className="heading d-flex justify-content-center align-items-center flex-column">
                  <h1 className="text-capitalize text-center">
                     Welcome to Shadehouse
                  </h1>
                  <p className="text-capitalize text-center">
                     Your sun shade solution
                  </p>
               </div>
            </div>
            <SelctionContainer
               sectionTitle="Our Products"
               data={productsInfo.slice(0, 6)}
               cardType="1"
            ></SelctionContainer>
            <SelctionContainer
               sectionTitle="Gallary"
               data={gallaryInfo}
               cardType="3"
            ></SelctionContainer>
            <SelctionContainer
               sectionTitle="Review"
               data={TestimonyInfo}
               cardType="2"
            ></SelctionContainer>
         </div>
         <Footer />
      </div>
   )
}
