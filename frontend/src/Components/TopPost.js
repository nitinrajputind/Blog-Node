import React from 'react'
import "./topPost.css"
import "./latestArticle.css"
import { Link } from 'react-router-dom'


const TopPost = (props) => {
  const { title, id, image, description , Category, index} = props;
  return (
    <Link  to={"/detaildescription/"+id} state={{ articleID: id , Cat : Category}}>
      <div className='Post_Contanier'>
      <div className="PostImg">
        <img src={image} alt="" />
      </div>
      <div className="Post_Content">
        <div className="Post_heading">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
        <p className='publish'>TRAVEL <span> / August 21 2017</span></p>
        <h1 className='num'>{index+1}</h1>
      </div>
    </div>
    </Link>
  )
}

export default TopPost
