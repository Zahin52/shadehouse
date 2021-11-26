import React from 'react'
import useAuth from '../../context/useAuth'
import { Redirect, Route } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

export default function PrivateRoute({ children, ...rest }) {
   const { users, isLoading } = useAuth()
   if (isLoading) {
      return <Spinner />
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            users?.email ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   )
}
