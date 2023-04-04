import React from 'react'
import Style from "./Footer.module.css";
import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import { Link } from "react-router-dom";
import LatestNews from './LatestNews/LatestNews';
import Information from './Information/Information';

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
        <div style={{height:"100px",fontSize:"34px", fontWeight:"800", lineHeight:"1", cursor:"pointer", color:"white"}}>
            Read <i style={{ fontStyle: "normal", color: "#ffd369" }}>it</i>.
          </div>
          <p style={{color:" rgba(255, 255, 255, 0.7)",textTransform:"none"}}>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className={Style.footer_social}>
            <a href='#'><AiOutlineTwitter/></a>
            <a href='#'><FaFacebookF/></a>
            <a href='#'><AiOutlineInstagram/></a>
          </div>
        </div>
        <div className={Style.footer_box_LatestNews}>
          <h3>Latest News</h3>
          <LatestNews/>
        </div>
        <div className={Style.footer_box_Information}>
          <h3>Information</h3>
          <Information/>
        </div>
        <div className={Style.footer_box_Address}>
          <h3>Have a Questions?</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer