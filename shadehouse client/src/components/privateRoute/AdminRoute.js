import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../context/useAuth';
import Spinner from '../Spinner/Spinner';


export default function AdminRoute({ children, ...rest }) {
    const [loading,setLoading]=useState(true)
    const { users, isLoading, isAdmin } = useAuth()
    useEffect(() => {
        setLoading(!isAdmin)
    }, [isAdmin])
   if (loading) {
      return <Spinner />
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            isAdmin ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   )
}
