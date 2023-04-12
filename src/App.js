import React, {useState} from "react";
import {  Route, Routes } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import { Home } from './pages/Home';
import { Authentication } from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
  <Routes>
          <Route path="/profile" element={<RequireAuth><Authentication/></RequireAuth> }/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<RequireAuth><Home/></RequireAuth> } />
          <Route path="*" element={<div>Page not found</div>}/>

    </Routes>
    </AuthProvider>
  );
}

export default App;
