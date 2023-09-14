import React from 'react'
import User from "../assets/User2.png"
import "./theLatest.css"
import { Link } from "react-router-dom";

const FromSerian = (props) => {
    const { title, id, image, description, Category} = props;
  return (
    <Link  to={"/detaildescription/"+id} state={{ articleID: id, Cat : Category}}>
      <div className="card">
        <div className="img_card">
          <img src={image} alt="not Found" />
        </div>
        <h3 className="tittle">{title}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
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
      </div>
    </Link>
  )
}



export default FromSerian
