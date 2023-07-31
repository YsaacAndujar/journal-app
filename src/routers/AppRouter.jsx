import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import React, { useState } from 'react'
import AuthRouter from "./AuthRouter";
import { JournalScreen } from "components/journal/JournalScreen";
import { useEffect } from "react";
import {firebase} from "../firebase/firebaseConfig";
import { store } from 'store/store'
import { login } from "actions/auth";
const { dispatch } = store;

function AppRouter() {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setChecking])
  if(checking){
    return(
      <h1>Cargando...</h1>
    )
  }
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/auth/*" element={ <AuthRouter/> }/>
                <Route path="/" element={ <JournalScreen/> }/>
                <Route path="*" element={ <Navigate to="/"/> }/>
            </Routes>   
        </div>
    </Router>
  )
}

export default AppRouter