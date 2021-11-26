import { Button, TextField, Alert } from '@mui/material'
import React, { useState } from 'react'
// import useAuth from './../../../hooks/useAuth'
import './makeAdmin.css'
import useAuth from '../../../context/useAuth'

const MakeAdmin = () => {
   const [email, setEmail] = useState('')
   const [success, setSuccess] = useState(false)
   const { Token } = useAuth()
   const handleOnBlur = (e) => {
      setEmail(e.target.value)
   }
   const handleAdminSubmit = (e) => {
      const user = { email }
      fetch('https://young-garden-78643.herokuapp.com/user/admin', {
         method: 'PUT',
         headers: {
            authorization: `Bearer ${Token}`,
            'content-type': 'application/json',
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount) {
               console.log(data)
               setSuccess(true)
            }
         })

      e.preventDefault()
   }
   return (
      <div className="d-flex justify-content-center">
         <div
            className="MakeAdminFormWrapper d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: 'calc(100vh - 10rem)' }}
         >
            <h2>Make an Admin</h2>
            <form
               className="MakeAdmin d-flex flex-column justify-content-center align-items-center w-100"
               onSubmit={handleAdminSubmit}
            >
               <TextField
                  sx={{ width: '100%', mb: 2, input: { color: '#000' } }}
                  label="Email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="outlined"
               />
               <button className="w-100" type="submit" variant="contained">
                  Make Admin
               </button>
            </form>
            {success && (
               <Alert severity="success">Made Admin successfully!</Alert>
            )}
         </div>
      </div>
   )
}

export default MakeAdmin
