import React from "react";
import { Link } from "react-router-dom";
import "./theLatest.css"

const TheLatest = (props) => {
  const { title, id, image, description , Category } = props;
  return (
    <Link  to={"/detaildescription/"+id} state={{ articleID: id , Cat : Category}}>
      <div className="card">
        <div className="img_card">
          <img src={image} alt="not Found" />
        </div>
        <h3 className="tittle">{title}</h3>
        <div className="content">
          <p>{description}</p>
        </div>
        <div className="publish">
          <p>
            Travel <span>/ August 21 2017</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TheLatest;
