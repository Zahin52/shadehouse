import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import useAuth from '../../context/useAuth'

export default function Header() {
   const { users, logout } = useAuth()
   //    console.log(users)
    const history=useHistory()
   return (
      <nav
         className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark "
         style={{ opacity: '1' }}
      >
         <div className="container">
            <NavHashLink
               style={{ background: '#c19542 none repeat scroll 0% 0%' }}
               className="navbar-brand border rounded-pill px-4 py-2 "
               to="/"
            >
               Shadehouse
            </NavHashLink>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                  <NavLink
                     className="nav-link active"
                     aria-current="page"
                     to="/"
                  >
                     Home
                  </NavLink>
                  <NavLink className="nav-link" to="/exploreProducts">
                     Explore
                  </NavLink>
                  {users?.email && (
                     <NavLink className="nav-link" to="/dashboard">
                        Dashboard
                     </NavLink>
                  )}

                  {users?.email && (
                     <span className="text-white p-2 border rounded-pill">
                        {users.displayName}
                     </span>
                  )}
                  {users?.email ? (
                     <NavLink className="nav-link " to="/">
                        <button
                           onClick={() => logout(history)}
                           className="btn btn-primary"
                        >
                           logout
                        </button>
                     </NavLink>
                  ) : (
                     <NavLink className="nav-link " to="/signup">
                        <button
                           className="btn border rounded-pill text-white "
                           style={{
                              background: '#c19542 none repeat scroll 0% 0%',
                           }}
                        >
                           Register / Login
                        </button>
                     </NavLink>
                  )}
               </div>
            </div>
         </div>
      </nav>
   )
}
