import React from 'react'
import Featured from '../Components/Featured'
import { useContext } from "react";
import TheLatest from '../Components/TheLatest';
import TopPost from '../Components/TopPost';
import LatestArticle from '../Components/LatestArticle';
import TextNews from '../Components/TextNews';
import { ContextDataProvider } from '../Context/ContextData';

const Home = () => {
  const ApiData = useContext(ContextDataProvider);
  return (
    <div>
      <Featured/>

      {/* The Latest Section  */}
      <div className="TheLatest">
        <h2>The Latest
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        <div className="Latest_contanier">
        {
         ApiData && ApiData.filter((data)=>data.category === "mix").map((item,index)=>{
            // console.log(item)
            return(
              
              <TheLatest key={index}
              title = {item.title} 
              id = {item.id} 
              image = {item.img} 
              Category = {item.category}
              description ={item.description.slice(0,200)}/>
            )
          })
        }
        </div>
      </div>

      {/* This is Parent Contanier  */}
      <div className="TheLatest Section_Contanier">

      {/* This is Latest Articles Contanier  */}
      
      {/* style={{width : "710px", border : "2px solid Blue"}} */}
        <div className="left_contanier" >
        <h2>
          Latest Articles
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        {
         ApiData.filter((data)=>data.id % 2 ===  0 && data.id % 4 === 0).map((item, index)=>{
          return(
            <LatestArticle key={index}
            title = {item.title.slice(0,100)} 
            id = {item.id} 
            image = {item.img} 
            Category = {item.category}
            description ={item.description.slice(0,100)}/>
          )
         })
        }
        </div>


        {/* This is Top Post Container  */}
        {/* style={{width : "500px" , border : "2px solid red"}} */}
        <div className="rightContanier" >

          <div className="div">
          <h2>
          To Posts
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        {
         ApiData.filter((data)=>data.id % 3 ===  0 && data.id % 6 === 0).map((item, index)=>{
          return(
            <TopPost key={index}
            title = {item.title.slice(0,50)} 
            id = {item.id} 
            image = {item.img} 
            Category = {item.category}
            description ={item.description.slice(0,80)}
            index ={index}/>
          )
         })
        }
        </div>

        {/* Advertisemnet section  */}
        <div className="advertisement_Home" >
          <h1>Advertesiment</h1>
          <img src="https://i.pinimg.com/564x/14/d2/c2/14d2c24b088cda4b7eb523ad4f8e7bf5.jpg" alt="" />
        </div>

        </div>

      </div>


      {/* Text News Only  */}

      <div className="TheLatest">
      <div className="Latest_contanier">
        {
          ApiData.filter((data)=>data.id % 3 === 0 && (data.category === "Hollywood")).map((item,index)=>{
            // console.log(item)
            return(
              
              <TextNews key={index}
              title = {item.title} 
              id = {item.id} 
              image = {item.img} 
              Category = {item.category}
              description ={item.description.slice(0,200)}/>
            )
          })
        }
        </div>
      </div>

    </div>
  )
}

export default Home
