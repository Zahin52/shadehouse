import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './manageProductCard.css'
import axios from 'axios'

export default function ManageProductCard({ info, callBack }) {
   //    console.log(info)
   const { image, title, fee, _id, model } = info

   const deletePoduct = (id) => {
      const confirm = window.confirm('Do you want to delete the product?')

      if (confirm) {
         axios
            .delete(`https://young-garden-78643.herokuapp.com/products/${id}`)
            .then((res) => {
               callBack.setMsg({
                  text: 'Deleted successfully',
                  type: 'success',
               })
               callBack.handleClick()
            })
            .catch((err) => {
               callBack.setMsg({
                  text: 'Something went wrong',
                  type: 'error',
               })
               callBack.handleClick()
            })
      }
   }

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
                  <buton
                     onClick={() => deletePoduct(_id)}
                     className="btn btn-outline-success btn-sm"
                  >
                     Delete Product
                  </buton>
                  <a href className="btn btn-outline-danger btn-sm ms-2 ">
                     ${fee}
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}
