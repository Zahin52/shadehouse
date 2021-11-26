import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
   getIdToken,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState, useEffect } from 'react'

import initializationAuthentication from '../firebase/firebase.init'
import { updateProfile } from '@firebase/auth'
import axios from 'axios'

initializationAuthentication()
const useFirebase = () => {
   const [users, setUser] = useState({})
   const [isAdmin, setAdmin] = useState(false)
   const [isLoading, setIsloading] = useState(true)
   const [Token, setToken] = useState(true)
   const auth = getAuth()

   const signInUsingGoogle = () => {
      setIsloading(true)
      const GoogleProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, GoogleProvider)
   }

   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            getIdToken(user).then((res) => setToken(res))
            setUser(user)
         } else {
            setUser({})
         }
         setIsloading(false)
      })
      return () => unsubscribed
   }, [])
   useEffect(() => {
      console.log(users.email)
      axios
         .get(`https://young-garden-78643.herokuapp.com/user/${users.email}`)
         .then((res) => {
            console.log(res.data.admin)
            setAdmin(res.data.admin)
         })
   }, [users])

   const logout = (history) => {
      setIsloading(true)
      signOut(auth)
         .then((res) => {
             setUser({})
             history.push("/")
            
         })
         .finally(() => setIsloading(false))
   }
   const setUserName = (name, history) => {
      setIsloading(true)
      updateProfile(auth.currentUser, {
         displayName: name,
      })
         .then(() => {
            history.push('/')
            setIsloading(false)
         })
         .catch((e) => console.log(e))
   }

   const createNewUser = ({ email, pass }) => {
      return createUserWithEmailAndPassword(auth, email, pass).finally(() => {
         setIsloading(false)
      })
   }
   const login = ({ email, pass }) => {
      setIsloading(true)
      console.log(email, pass)
      return signInWithEmailAndPassword(auth, email, pass)
   }
   const saveUserToDb = (email, displayName, type) => {
      const user = { email, displayName }
      console.log(user)
      if (type === 'put') {
         axios
            .put('https://young-garden-78643.herokuapp.com/user', user)
            .then((res) => console.log('user added'))
            .catch((err) => console.log(err))
      } else {
         axios
            .post('https://young-garden-78643.herokuapp.com/user', user)
            .then((res) => console.log('user added'))
            .catch((err) => console.log(err))
      }
   }
   return {
      users,
      Token,
      isAdmin,
      signInUsingGoogle,
      logout,
      isLoading,
      createNewUser,
      login,
      setUserName,
      saveUserToDb,
   }
}

export default useFirebase
