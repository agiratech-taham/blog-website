import React from 'react';
import Home from '../pages/home/Home';
import {  Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import loadingGif from '../assets/loading.gif';
const RouteLayout = () => {
    <>
     <Suspense fallback={<div style={{ height: '100vh', width: "100%", overflow: "hidden", display: "flex", justifyContent: 'center', alignItems: 'center' ,background:'#fff'}}><img src={loadingGif} alt="my-gif" /></div>}>
  <Routes>
          <Route path="/" element={<Home />} />
    </Routes>
    </Suspense>
    </>
}
export default RouteLayout;