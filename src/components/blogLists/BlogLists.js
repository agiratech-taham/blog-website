import React from "react";
import "./BlogLists.css";
import { Box, Container } from "@mui/system";
import Img1 from '../../assets/image_1.jpg.webp';
import Img2 from '../../assets/image_2.jpg.webp';
import Img3 from '../../assets/image_3.jpg.webp';
import Img4 from '../../assets/image_4.jpg.webp';
import Img5 from '../../assets/image_5.jpg.webp';
import Img6 from '../../assets/image_6.jpg.webp';
import Img7 from '../../assets/image_7.jpg.webp';
import Img8 from '../../assets/image_8.jpg.webp';
import Img9 from '../../assets/image_9.jpg.webp';
import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"

const BlogLists = () => {
  const posts = [
    {
      id: 1,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img1,
    },
    {
      id: 2,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img2,
    },
    {
      id: 3,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img3,
    },
    {
      id: 4,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img4,
    },
    {
      id: 5,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img5,
    },
    {
      id: 6,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img6,
    },
    {
      id: 7,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img7,
    },
    {
      id: 8,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img8,
    },
    {
      id: 9,
      title: "Build a website in minutes with Adobe Templates",
      desc: "ILLUSTRATION",
      desc2: "11/13/2019 | 12 min read",
      img: Img9,
    },
  ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    // <Container fixed>
      <div className="home"> 
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <p>{getText(post.desc)}</p>
                <h1>{post.title}</h1>
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
                <p className="para2">{getText(post.desc2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};
export default BlogLists;
