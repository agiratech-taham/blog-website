import React from 'react'
import BannerContent from '../HomeBannerCont/BannerContent';
import "./Overlay.css";
const HomeBanner = () => {
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