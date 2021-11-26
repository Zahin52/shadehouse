import React from 'react'


export default function Footer() {
   return (
      <div className="bg-dark text-white p-4" style={{ 'z-index': '10' }}>
         <div className="container text-center">
            <div className="d-flex flex-column flex-sm-row justify-content-between  mb-3">
               <div className="text-center">
                  <div>
                     <h3 className="text-danger">ShadeHouse</h3>
                     <div>
                        <p>
                           <span>Email:</span>
                           <span>ShadeHouse@gmail.com</span>
                        </p>
                        <p>
                           <span>Phone:</span>
                           <span>+880175469854</span>
                        </p>
                     </div>
                  </div>
               </div>

               <div>
                  <h1>Contact us</h1>
                  <div>
                     <a
                        href="https://shadehouse-d69c2.web.app/"
                        className="mx-2 text-white"
                     >
                        <i className="fa fa-facebook-square fa-2x"></i>
                     </a>
                     <a
                        href="https://shadehouse-d69c2.web.app/"
                        className="mx-2 text-white"
                     >
                        <i className="fa fa-github-square fa-2x"></i>
                     </a>
                     <a
                        href="https://shadehouse-d69c2.web.app/"
                        className="mx-2 text-white"
                     >
                        <i className="fa fa-twitter-square fa-2x"></i>
                     </a>
                  </div>
               </div>
            </div>
            <p className="text-center">Copyright &copy;2021 ShadeHouse</p>
         </div>
      </div>
   )
}
