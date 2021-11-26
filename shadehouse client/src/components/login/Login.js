import React from 'react'
import './login.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react'
import useAuth from '../../context/useAuth'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function Login() {
   const [email, setEmail] = useState('')
   const [pass, setPass] = useState('')
   const [error, setError] = useState('')
   const history = useHistory()
   const location = useLocation()
   const redirect = location.state?.from || '/'
   const { signInUsingGoogle, login, saveUserToDb } = useAuth()
   const handleGoogleLogin = () => {
      signInUsingGoogle()
         .then((result) => {
            saveUserToDb(result.user.email, result.user.displayName, 'put')
            history.push(redirect)
         })
         .catch((e) => setError(e.message))
   }
   const handleLogin = (e) => {
      e.preventDefault()
      login({ email, pass })
         .then((result) => {
            history.push(redirect)
         })
         .catch((error) => {
            setError(error.message)
         })
         .finally(() => {})
      console.log({ email, pass })
   }
   return (
      <div>
         <Header />
         <div className=" mx-auto">
            <div className="d-flex justify-content-center">
               <div className=" d-flex justify-content-center ">
                  <div className="card w-100">
                     <form className="box w-100">
                        <h1>Login</h1>
                        <p className="text-muted">
                           Please enter your login and password!
                        </p>
                        <input
                           type="email"
                           placeholder="Email"
                           required
                           onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                           type="password"
                           placeholder="Password"
                           required
                           minlength="6"
                           onChange={(event) => setPass(event.target.value)}
                        />
                        <p className="text-white">{error}</p>
                        <input
                           type="submit"
                           onClick={(e) => handleLogin(e)}
                           name=""
                           value="Login"
                        />
                        <div className="col-md-12">
                           <p className="text-white">Login with google </p>
                           <ul className="social-network social-circle">
                              <li>
                                 <a
                                    onClick={handleGoogleLogin}
                                    className="icoGoogle"
                                    title="Google +"
                                    href
                                 >
                                    <i className="fa fa-google-plus"></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   )
}
