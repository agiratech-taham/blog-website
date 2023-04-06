import React from 'react';
import {  Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import loadingGif from '../assets/loading.gif';
import Home from '../pages/home/Home';
const RouteLayout = () => {
    <Suspense fallback={<div style={{ height: '100vh',
     width: "100%",
     overflow: "hidden",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    background:'#fff'}}>
    <img src={loadingGif} alt="my-gif" />
    </div>}
    >
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/team" element={<Home />} />
          <Route path="/contact" element={<Home />} />

    </Routes>
    </Suspense>
}
export default RouteLayout;