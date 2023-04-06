import React, { useState } from 'react'
import BannerContent from '../HomeBannerCont/BannerContent';
import "./Overlay.css";
const HomeBanner = () => {
  let [state, setState] = useState({
    backgroundPosition: '50% 0px'
  })
  const changeColor = () => {
    console.log('width', "50% "+((window.scrollY/2)-25) +'px');
    console.log((window.scrollY/2)-25)
    // state.backgroundPosition = "50% "+(window.scrollY/2)-25 +'px';
    // setState(state);
    let elem = document.querySelector('.container-home');
    elem.style.backgroundPosition = "50% "+((window.scrollY/2)-25) +'px';
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className="container-home">
        <div className="color-overlay"></div> 
        <BannerContent/>
      </div>
    </>
  )
}

export default HomeBanner