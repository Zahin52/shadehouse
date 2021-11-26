import React, { createContext } from 'react'
import UseFirebase from '../hooks/useFirebase'

export const AuthContext = createContext()

export default function authProvider({children}) {
  
    const allContext = UseFirebase();
    return <AuthContext.Provider value={allContext}>
       {children}
   </AuthContext.Provider>
}
