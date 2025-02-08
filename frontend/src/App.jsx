/* eslint-disable no-unused-vars */

import  Navbar from "./Components/Navbar"
import {Routes, Route, Navigate} from 'react-router-dom';
import React from 'react'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";







function App() {
  const {authUser, checkAuth,isCheckingAuth}= useAuthStore();
   
  useEffect(() => {
    checkAuth();
  },[checkAuth]);
  
  console.log({authUser});

  if(isCheckingAuth && !authUser) return (
    <div className=" flex justify-center h-screen">
    <span className="loading loading-dots loading-lg mr-5 "></span> 
    <span className="loading loading-dots loading-lg "></span>
    </div>
  )
  

  return (
   
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser ?  <SignupPage/> : <Navigate to="/"/> } />
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/"/>} />
        <Route path="/setting" element={<SettingPage/>} />
        <Route path="/profile" element={authUser ? <ProfilePage/> :<Navigate to="/login"/>} />

      </Routes>

      <Toaster/>
    </div>

    
  )
}

export default App
