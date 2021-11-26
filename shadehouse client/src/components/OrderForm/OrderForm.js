import React, { useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useAuth from '../../context/useAuth'
import './OrderForm.css'
import Spinner from '../Spinner/Spinner'
import axios from 'axios'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function BookingForm() {
   const { users } = useAuth()
   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   const Address = useRef('')
   const Phone = useRef('')
   const quantity = useRef('')

   const [details, setdetails] = useState([])
   const [spinner, setSpinner] = useState(true)
   const history = useHistory()
   const { id } = useParams()
   useEffect(() => {
      fetch(`https://young-garden-78643.herokuapp.com/products/${id}`)
         .then((res) => res.json())
         .then((data) => {
            // console.log(data)
            setdetails(data)
            setEmail(users.email)
            setName(users.displayName)
            setSpinner(false)
         })
   }, [])
   const confirmBooking = (e) => {
      e.preventDefault()

      const purchaseInfo = {
         email,
         name,
         item: details['model'],
         address: Address.current.value,
         phone: Phone.current.value,
         quantity: quantity.current.value,
         status: 'pending',
      }
      if (
         !purchaseInfo.phone.length ||
         !purchaseInfo.quantity.length ||
         !purchaseInfo.address.length
      ) {
         alert('please Fill all the fields')
         return
      }
      console.log(purchaseInfo)
      axios
         .post(
            'https://young-garden-78643.herokuapp.com/purchase',
            purchaseInfo,
         )
         .then((response) => {
            console.log(response)
            if (response.status === 200) {
               alert('Order Done')
               history.push('/dashboard')
               //    history.push('/myBookings')
            } else {
               alert('Something went wrong while Ordering. Try again')
            }
         })
         .catch((error) => {
            console.log(error)
         })
   }

   console.log(details['image'])
   if (spinner) {
      return <Spinner />
   }
   return (
      <div>
         <Header />
         <div id="booking" className="section p-4">
            <div className="section-center">
               <div className="container">
                  <div className="row row-cols-1 row-cols-sm-2 ">
                     <div className="col text-center   h-auto my-2">
                        <div className=" px-3 h-100">
                           <div className="w-50 mx-auto my-3">
                              <img
                                 alt=""
                                 className="img-fluid"
                                 src={details['image']}
                              />
                           </div>
                           <div className="text-secondary">
                              <h3 className="text-secondary text-capitalize ">
                                 {details['title']}
                              </h3>
                              <p className="fs-6 text-secondary">
                                 Model : {details['model']}
                              </p>
                              <p className="px-4 ">{details['details']}</p>

                              <p className="fs-3 text-info">
                                 Price : ${details['fee']} / item
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col booking-form text-center my-2">
                        <div className="form-header">
                           <h1>Order your Shade</h1>
                        </div>
                        <form>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <input
                                       className="form-control w-100"
                                       type="email"
                                       value={email}
                                       placeholder="Enter your Email"
                                       disabled
                                    />
                                    <span className="form-label">Email</span>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <input
                                       className="form-control w-100"
                                       type="text"
                                       value={name}
                                       placeholder="Enter you Name"
                                       disabled
                                    />
                                    <span className="form-label">Name</span>
                                 </div>
                              </div>
                           </div>
                           <div className="form-group">
                              <input
                                 className="form-control w-100"
                                 type="text"
                                 ref={Address}
                                 placeholder="Your address..."
                              />
                              <span className="form-label">Address</span>
                           </div>
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <input
                                       className="form-control w-100"
                                       type="text"
                                       ref={Phone}
                                       placeholder="+88017...."
                                    />
                                    <span className="form-label">Phone</span>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <select
                                       ref={quantity}
                                       className="form-control"
                                       required
                                    >
                                       <option value="" selected hidden>
                                          quantity
                                       </option>
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                    <span className="form-label">Quatity</span>
                                 </div>
                              </div>
                           </div>

                           <div className="form-btn">
                              <button
                                 onClick={(e) => confirmBooking(e)}
                                 className="submit-btn"
                              >
                                 Order Now
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}
