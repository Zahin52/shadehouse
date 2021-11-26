import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

export default function GallaryCard({ info }) {
//    console.log(info)
   const { image } = info

   return (
      <div className="col h-auto p-2 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center ">
            <div style={{ overflow: 'hidden' }}>
               <img src={image} className="card-img-top" alt="" />
            </div>
         </div>
      </div>
   )
}
