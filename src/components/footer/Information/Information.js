import React from 'react'
import Style from "./Information.module.css"
const Information = () => {

const info =[
    {
        name:"Home",
        link:"home"
    },
    {
        name:"About",
        link:"about"
    },
    {
        name:"Articles",
        link:"articles"
    },
    {
        name:"Contact",
        link:"contact"
    },
]

  return (
    <div>
        {info.map((el, i)=>(
            <div key={i+1} className={Style.information}>
            <a href={{pathname: `${el.link}`}}>{el.name}</a>
            </div>
        ))}
    </div>
  )
}

export default Information