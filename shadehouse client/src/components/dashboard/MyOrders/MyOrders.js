import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../../Spinner/Spinner'
import MyOrdersCards from './MyOrdersCards/MyOrdersCards'
import useAuth from '../../../context/useAuth'

export default function MyOrders() {
   const [data, setData] = useState([])
   const [Spinners, setSpinner] = useState(true)
   const { users } = useAuth()
   useEffect(() => {
      axios
         .get('https://young-garden-78643.herokuapp.com/purchase')
         .then((res) => {
            const data = res.data.filter((item) => item.email === users.email)
            setData(data)
            setSpinner(false)
         })
   }, [data])
   if (Spinners) {
      return <Spinner />
   }
   return (
      <div className="">
         <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3  p-3 mx-auto justify-content-center align-items-center"
            style={{ 'min-height': 'calc(100vh - 292px)' }}
         >
            {data.length < 1 ? (
               <span className="fs-2 text-center"> Sorry ! NO Orders </span>
            ) : (
               data.map((item) => <MyOrdersCards key={item._id} info={item} />)
            )}
         </div>
      </div>
   )
}
