import React from 'react'
import './notfound.css'
import notfoundImage from "./404.jpg"

export default function Notfound() {
   return (
      <div style={{ 'min-height': 'calc(100vh - 245px)' }}>
         <div className="notfoundImage d-flex justify-content-center">
            <img className="img-fluid" src={notfoundImage} alt="" srcset="" />
         </div>
      </div>
   )
}
