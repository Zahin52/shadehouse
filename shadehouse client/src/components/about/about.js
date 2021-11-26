import React from 'react'


export default function About() {
   return (
      <div className="my-5 p-4">
         <div className="row row-cols-1 row-cols-sm-2 px-5 mx-auto ">
            <div>
               <img
                  className="img-fluid"
                  src="images/about us/1.jpg"
                  alt=""
                  srcset=""
               />
            </div>
            <p className="d-flex justify-content-center align-items-center">
               <p>
                  Since 1975, Destino has been committed to bringing travelers
                  the best in value and quality travel arrangements. We are
                  passionate about travel and providing corporate travelers
                  high-touch services to facilitate their business travel needs
                  and sharing the world’s wonders on the leisure travel side.
               </p>
            </p>
         </div>
         <div className="row row-cols-1 row-cols-sm-2 px-5 mx-auto my-4">
            <div className="d-flex justify-content-center align-items-center ">
               <div>
                  <h1 className=" pb-4 text-start">Our mission</h1>
                  <div className="">
                     <p className="text-start">
                        We’re a worker-claimed travel organization secured by
                        our qualities, trustworthiness, and commitment to client
                        benefit. Our honor-winning organization reliably
                        positions as a standout amongst other offices in the
                        nation (Travel Weekly, Business Travel Weekly), and is
                        the best individual from the renowned Signature Travel
                        Network, an overall association enabling us to give our
                        clients unmatched advantages.
                     </p>
                  </div>
               </div>
            </div>
            <div>
               <img
                  className="img-fluid"
                  src="images/about us/2.jpg"
                  alt=""
                  srcset=""
               />
            </div>
         </div>
      </div>
   )
}
