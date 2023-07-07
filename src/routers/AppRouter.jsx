import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import React from 'react'
import AuthRouter from "./AuthRouter";
import { JournalScreen } from "components/journal/JournalScreen";

function AppRouter() {
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