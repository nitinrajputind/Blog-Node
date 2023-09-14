import React from 'react'
import "./latestArticle.css"
import { Link } from 'react-router-dom'

const LatestArticle = (props) => {
  const { title, id, image, description , Category } = props;
  return (
    <Link  to={"/detaildescription/"+id} state={{ articleID: id , Cat : Category}}>
    <div className='Article_Contanier'>
      <div className="articleImg">
        <img src={image} alt="not Found" />
      </div>
      <div className="Article_Content">
        <div className="articleheading">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        <p className='publish'>TRAVEL <span> / August 21 2017</span></p>
      </div>
    </div>
    </Link>
    
  )
}

export default LatestArticle
