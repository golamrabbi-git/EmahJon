import React from 'react';
import { createContext, useEffect,useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut} from 'firebase/auth';
import app from './../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);




const UserContext = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const CreateUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const SignIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const logOut=()=>{
        setLoading(true);
      return signOut(auth);
    }

   useEffect(()=>{
    onAuthStateChanged (auth,user=>{
        setUser(user);
        setLoading(false);
    })
   },[])
    

  
    return (
        <AuthContext.Provider value = {{user,loading,CreateUser,SignIn,logOut}}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;