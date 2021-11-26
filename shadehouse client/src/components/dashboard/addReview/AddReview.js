import React, { useState } from 'react'
import { TextField, Rating, Typography, Snackbar, Alert } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import './addReview.css'
import axios from 'axios'
import Slide from '@mui/material/Slide'
import useAuth from '../../../context/useAuth'

export default function AddReview() {
   const { users } = useAuth()
   const [review, setReview] = useState({
      name: users.displayName,
      review: '',
      rating: 0,
   })
   const changeHandle = (e) => {
      let result = { ...review }
      const field = e.target.name
      const val = e.target.value
      result[field] = val
      setReview(result)
   }
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
   const handleSubmit = () => {
      console.log(review.rating, review.name.length, review.review.length)
      if (!review.name.length || !review.review.length) {
         setMsg({
            text: 'Please fill the name and review Field',
            type: 'error',
         })
         handleClick()
         return
      }
      axios
         .post('https://young-garden-78643.herokuapp.com/reviews', review)
         .then((res) => {
            console.log(res)
            setMsg({
               text: 'Review added successfully',
               type: 'success',
            })
            handleClick()
            setReview({ name: users.displayName, review: '', rating: 0 })
            console.log(review)
         })
         .catch((err) => alert('something went wrong .Please try again'))
   }
   return (
      <div
         className="d-flex flex-column justify-content-center justify-content-center container addReviewFormWrapper "
         style={{ minHeight: 'calc(100vh - 10rem)' }}
      >
         <h3 className="text-center">
            <span>Give your review</span>
         </h3>
         <div className="d-flex flex-column justify-content-evenly container h-100 addReview">
            <TextField
               disabled
               onChange={changeHandle}
               id="name"
               value={review?.name}
               label="Name"
               name="name"
               variant="outlined"
               sx={{ input: { color: '#000' }, my: 1 }}
            />

            <TextField
               onChange={changeHandle}
               id="review"
               value={review?.review}
               label="Review"
               name="review"
               variant="outlined"
               sx={{ input: { color: '#000' }, my: 1 }}
            />
            <div className="d-flex align-items-center">
               <Typography color="primary" sx={{ display: 'inline', mr: 1 }}>
                  <span>Rating :</span>
               </Typography>
               <Rating
                  name="rating"
                  value={review.rating}
                  onChange={changeHandle}
               />
            </div>
            <button
               onClick={handleSubmit}
               className="d-flex align-items-center justify-content-center my-1"
            >
               Send <SendIcon />
            </button>
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
   )
}
