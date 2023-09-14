import React, { useContext } from 'react'
import { ContextDataProvider } from '../Context/ContextData'
import TheLatest from '../Components/TheLatest';
import LatestArticle from '../Components/LatestArticle';
import TopPost from '../Components/TopPost';
import TextNews from '../Components/TextNews';


const Hollywood = () => {
  const Apidata = useContext(ContextDataProvider);
  return (
    <>
    <div className="TheLatest">
        <h2>Hollywood
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.category === "Hollywood"  && (data.id >= 19 && data.id <= 24) ).map((item,index)=>{
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

            {/* TOP post and Latest Article  */}


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

         Apidata.filter((data)=>data.category === "Hollywood" ).map((item, index)=>{
           
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
        <h2>
          To Posts
          <hr style={{width: "100px", height: "3px", background: "red", border: "none" , outline:"none" , borderRadius:"5px"}}/>
        </h2>
        {
         Apidata.filter((data)=>data.id % 3 === 0 && (data.category === "Fitness" || data.category === "Technology" )).map((item, index)=>{
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
      </div>



           {/* Text News Only  */}

           <div className="TheLatest">
      <div className="Latest_contanier">
        {
          Apidata.filter((data)=>data.id % 2 === 0 && (data.category === "Hollywood" && data.id % 4 ===0)).map((item,index)=>{
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



    </>
  )
}

export default Hollywood
