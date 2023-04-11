import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import "./Address.css"
const Address = () => {
    const address =[
        {
            id:1,
            info:"	203 Fake St. Mountain View, San Francisco, California, USA",
            icon:<MdLocationOn/>
        },
        {
            id:2,
            info:"+2 392 3929 210",
            icon:<BsFillTelephoneFill/>
        },
        {
            id:3,
            info:"info@yourdomain.com",
            icon:<GrMail/>
        }
    ]

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
      };

  return (
    <div className="address-home"> 
        <div className="address-posts">
          {address.map((post) => (
            <div className="address-post" key={post.id}>
              <div className="address-icon">
                {post.icon}
              </div>
              <div className="address-content">
                <div style={{display:"block",fontSize: "11px"}}>
                <p className="address-para1">{getText(post.info)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Address