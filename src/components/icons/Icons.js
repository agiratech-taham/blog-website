import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import "./Icons.css"

const Icons = () => {
  return (
    <>
     <ul className="media-social list-unstyled ">
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                      <span>
                      <AiOutlineTwitter/>
                      </span>
                    </a>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                      <span>
                      <FaFacebookF/>
                      </span>
                    </a>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                    <span>
                      <AiOutlineInstagram/>
                    </span>
                    </a>
                  </li>
              </ul>
    </>
  )
}

export default Icons