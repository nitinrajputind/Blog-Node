import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";
import { FaHands } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import "./blogPage.css";
import FromSerian from "../Components/FromSerian";

import User from "../assets/User2.png"
import { ContextDataProvider } from "../Context/ContextData";

const BlogPage = () => {
  // Take Id From The Link
  const location = useLocation();
  const { articleID , Cat } = location.state;
  console.log(articleID);
  console.log(Cat);
  

  const ApiData = useContext(ContextDataProvider);
  // console.log(ApiData);
  return (
    <>
      <div className="Main_Desc">

        {/* Like And Share Button  */}

        <div className="ShareIcon">
          <div className="div1">
          <FaHands className="clap" />
          <p>9.3k Claps</p>
          </div>
          <div className="div2">
            <BiShareAlt style={{fontSize:'2rem'}}/>
            <p>Share This Article</p>
          </div>
        </div>

        {/* Main description Post  */}
        {ApiData.filter((data) => data.id === articleID).map((item, index) => {
          return (
            <div key={index} className="main-head">
              <div className="head">
                <h1>{item.title}</h1>
              </div>

              <div className="user">
                <div className="username">
                  <div className="usericon">

                    <img src={User} alt=""  className="icon"/>
                    {/* This is Authour name Icon */}
                  </div>
                  <div className="name">
                    <h3>Nitin Rajput</h3>
                    <p>jan 28 2019 | 10 min read</p>
                  </div>
                </div>

                <div className="userSocial top_Postion">
                  <AiFillFacebook />
                  <AiFillTwitterSquare />
                  <AiOutlineYoutube />
                  <AiFillInstagram />
                </div>
              </div>

              <div className="Main_Image">
                <img src={item.img} alt="not Found" />
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>

              <div className="like">
                <FaHands className="clap" />
                <p>9.3k Claps</p>
              </div>

              {/* Auther Section  */}
              <div className="user">
                <div className="username">
                  <div className="usericon">
                  <img src={User} alt=""  className="icon"/>
                    {/* This is Authour name Icon */}
                  </div>
                  <div className="name">
                    <h3>Nitin Rajput</h3>
                    <p>jan 28 2019 | 10 min read</p>
                  </div>
                </div>
                <div className="userSocial">
                  <AiFillFacebook />
                  <AiFillTwitterSquare />
                  <AiOutlineYoutube />
                  <AiFillInstagram />
                </div>
              </div>

              <hr className="border" />
            </div>
          );
        })}

        <div className="TheLatest">
          <h2>
            More From Serian
            <hr
              style={{
                width: "100px",
                height: "3px",
                background: "red",
                border: "none",
                outline: "none",
                borderRadius: "5px",
              }}
            />
          </h2>
          <div className="Latest_contanier">
            {ApiData.filter((data) => data.id %2 === 0 && (data.id % 4 ===0)).map(
              // eslint-disable-next-line array-callback-return
              (item, index) => {
                if (item.category === Cat) {
                  console.log(item.id)
                  return (
                    <FromSerian
                       key={index}
                      title={item.title}
                      id={item.id}
                      image={item.img}
                      Category={item.category}
                      description={item.description.slice(0, 200)}
                   />
                   );
                }
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
