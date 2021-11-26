import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

import './card.css'

export default function ProductCard({ info }) {
//    console.log(info)
   const { image, title, fee, _id, model } = info
   return (
      <div className="col h-auto p-2 card-parent rounded-3">
         <div className="card h-100 shadow  pt-3 px-3 mb-3 ">
            <div className="" style={{ overflow: 'hidden' }}>
               <img src={image} alt="" className="card-img-top" />
            </div>
            <div className="card-body d-flex flex-column">
               <h5 className="card-title text-capitalize">{title}</h5>
               <p
                  className="card-text text-secondary"
                  style={{ 'font-size': '.9rem' }}
               >
                  <span>Model No :</span> {model}
               </p>
               <div className=" mt-auto">
                  <NavLink
                     to={`/services/${_id}`}
                     className="btn btn-outline-success btn-sm"
                  >
                     Buy Now
                  </NavLink>
                  <a href className="btn btn-outline-danger btn-sm ms-2 ">
                     ${fee}
                  </a>
               </div>
            </div>
         </div>
      </div>
   )


}
