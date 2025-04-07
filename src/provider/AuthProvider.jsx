
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.init';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext= createContext(null)
export const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const axiosPublic=useAxiosPublic()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };
    const updateUserProfile=(name,photo)=>{
      return updateProfile(auth.currentUser, {
          displayName:name,photoURL:photo
      })
  }
    const signWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const userInfo={
        user,loading,createUser,signInUser,setUser,logOut,updateUserProfile,signWithGoogle
    }
    useEffect(()=>{
        const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser)
          
              if(currentUser){
                const userInfo={email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                        setLoading(false)
                    }
                })

              }else{
                localStorage.removeItem('access-token');
                setLoading(false)
              }
            
           
          })
          return ()=>{
              unSubscribe()
          }
  
      },[axiosPublic])
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider