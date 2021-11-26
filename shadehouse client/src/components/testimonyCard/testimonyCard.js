import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './qoute.css'
import StarRatings from 'react-star-ratings'

export default function TestimonyCard({ info }) {
   //    console.log(info)
   const { name, review, rating } = info
   // console.log(name, review, rating)
   // const rate=rating? rating : 5
   return (
      <div className="col-lg-4 py-3 mx-auto">
         <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded  h-100 d-flex flex-column">
            <div className="blockquote-custom-icon bg-info shadow-sm">
               <i className="fa fa-quote-left text-white"></i>
            </div>
            <p className="mb-0 mt-2 font-italic">{review}</p>
            <footer className="blockquote-footer pt-4 mt-4 border-top mt-auto">
               <span>{name}</span>
               <div className="d-flex justify-content-center align-items-center mt-2">
                  <StarRatings
                     starDimension="30px"
                     starSpacing="2px"
                     rating={parseInt(rating)}
                     starRatedColor="orange"
                     numberOfStars={5}
                     name="rating"
                  />
                  {/* <span>{rating}</span> */}
               </div>
            </footer>
         </blockquote>
      </div>
   )
}
