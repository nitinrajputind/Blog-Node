import React from "react";
import { Link } from "react-router-dom";
import "./theLatest.css"

const TextNews = (props) => {
  const { title, id, description , Category } = props;
  return (
    <Link  to={"/detaildescription/"+id} state={{ articleID: id , Cat : Category}}>
      <div className="card">
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

export default TextNews;
