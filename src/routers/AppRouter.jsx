import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import React, { useState } from 'react'
import AuthRouter from "./AuthRouter";
import { JournalScreen } from "components/journal/JournalScreen";
import { useEffect } from "react";
import {firebase} from "../firebase/firebaseConfig";
import { store } from 'store/store'
import { login } from "actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { OnlyPublicRoute } from "./OnlyPublicRoute";
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
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isLoggedIn}/>}>
          <Route path="/" element={ <JournalScreen/> }/>
        </Route>
        <Route element={<OnlyPublicRoute isAuthenticated={isLoggedIn}/>}>
          <Route path="/auth/*" element={ <AuthRouter /> }/>
        </Route>
          
          <Route path="*" element={ <Navigate to="/"/> }/>
      </Routes>   
    </Router>
  )
}

export default AppRouter