import React from 'react'
import Style from "./LatestNews.css"
import Img1 from '../../../assets/image_1.jpg.webp';
import Img2 from '../../../assets/image_2.jpg.webp';
const LatestNews = () => {
// News Item
const news = [
    {
        title: "Even the all-powerful Pointing has no control about",
        desc: "Oct. 16, 2019",
        desc2: "Admin 19",
        img: Img1,
    },
    {
        title: "Even the all-powerful Pointing has no control about",
        desc: "Oct. 16, 2019",
        desc2: "Admin 19",
        img: Img2,
    },

]

const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="news-home"> 
        <div className="news-posts">
          {news.map((post) => (
            <div className="news-post" key={post.id}>
              <div className="news-img">
                <img style={{width:"80px",
                height: "80px",
                backgroundSize: "cover",
            }} src={post.img} alt="" />
              </div>
              <div className="news-content">
                <h2>{post.title}</h2>
                <div style={{display:"block",fontSize: "11px"}}>
                <p className="news-para1">{getText(post.desc)}</p>
                <p className="news-para2">{getText(post.desc2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default LatestNews