import { Suspense } from 'react';
import {  Route, Routes } from "react-router-dom";
import './App.css';
// import Router from "../src/RouteLayout/index"
import loadingGif from './assets/loading.gif';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { Team } from './pages/Team';
import { Home } from './pages/Home';

function App() {
  return (
    <>
  <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />

    </Routes>
    </>
  );
}

export default App;
