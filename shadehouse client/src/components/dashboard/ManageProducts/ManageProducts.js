import React, { useEffect, useState } from 'react'
import ManageProductCard from './ManageProductCard'
import { Snackbar, Alert } from '@mui/material'
import Slide from '@mui/material/Slide'
import Spinner from '../../Spinner/Spinner'

export default function ManageProducts() {
   const [products, setProducts] = useState([])
   const [open, setOpen] = React.useState(false)
   const [loading, setLoading] = useState(true)
   const [msg, setMsg] = React.useState({})
   function TransitionLeft(props) {
      return <Slide {...props} direction="left" />
   }
   const handleClick = () => {
      setOpen(true)
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }

      setOpen(false)
   }
   useEffect(() => {
      fetch('https://young-garden-78643.herokuapp.com/products')
         .then((res) => res.json())
         .then((data) => {
            setProducts(data)
            setLoading(false)
         })
   }, [open])
   const importFunct = { handleClick, setMsg }
   console.log(products)
   return (
      <div>
         {loading ? (
            <Spinner />
         ) : (
            <div>
               <div className="container">
                  <div>
                     <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-secondary px-4 py-2 ">
                        All Products
                     </h1>
                  </div>
                  <div className=" " style={{ 'min-height': '100vh' }}>
                     <div className="row row-cols-1 row-cols-lg-3  mx-auto justify-content-center my-4 text-capitalize">
                        {products.map((data, i) => (
                           <ManageProductCard
                              key={i}
                              info={data}
                              callBack={importFunct}
                           />
                        ))}
                     </div>
                  </div>
               </div>
               <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  TransitionComponent={TransitionLeft}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
               >
                  <Alert
                     onClose={handleClose}
                     severity={msg.type}
                     sx={{ width: '100%' }}
                  >
                     {msg.text}
                  </Alert>
               </Snackbar>
            </div>
         )}
      </div>
   )
}
