import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Router from "../src/RouteLayout/index"
import { Suspense } from 'react';
import loadingGif from './assets/loading.gif';

function App() {
  return (
    <>
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
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
