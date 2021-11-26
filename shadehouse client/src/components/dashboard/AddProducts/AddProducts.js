import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './style.css'
import { useHistory } from 'react-router-dom'
import { Snackbar, Alert } from '@mui/material'
import Slide from '@mui/material/Slide'

export default function AddProducts() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm()
   const history = useHistory()
   const [open, setOpen] = React.useState(false)
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
   const onSubmit = (data) => {
      console.log(data)
      axios
         .post('https://young-garden-78643.herokuapp.com/products', data)
         .then((res) => {
            setMsg({
               text: 'Added successfully',
               type: 'success',
            })
            handleClick()
            reset()
            // history.push('/dashboard')
         })
         .catch((err) => {
            setMsg({
               text: 'Something went wrong',
               type: 'error',
            })
            handleClick()
         })
   }
   console.log(errors)

   return (
      <div
         className="text-secondary container col-12 col-md-8 addProduct py-5"
         style={{ 'min-height': 'calc(100vh - 20rem)' }}
      >
         <div className="text-center">
            <h3>Add New Product</h3>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               className="w-100"
               placeholder="Name"
               {...register('title', { required: true, maxLength: 100 })}
            />
            <input
               type="text"
               className="w-100"
               placeholder="Model"
               {...register('model', { required: true, maxLength: 100 })}
            />
            <textarea
               className="w-100"
               placeholder="Details"
               {...register('details', { required: true })}
            />
            <input
               type="text"
               className="w-100"
               placeholder="Price (1 item)"
               {...register('fee', { required: true })}
            />
            <input
               type="text"
               className="w-100"
               placeholder="Image URL"
               {...register('image', { required: true })}
            />

            <input
               className="text-white p-3"
               value="Add Product"
               type="submit"
            />
         </form>
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
   )
}
