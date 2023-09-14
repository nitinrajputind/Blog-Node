import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technology from '../Pages/Technology'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
import Hollywood from '../Pages/Hollywood'
import BlogPage from '../Pages/BlogPage'

const RouterComp = () => {
  return (
   <>
   <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/Bollywood" element = {<Bollywood/>}/>
        <Route path="/Technology" element = {<Technology/>}/>
        <Route path="/Hollywood" element = {<Hollywood/>}/>
        <Route path="/Fitness" element = {<Fitness/>}/>
        <Route path="/Food" element = {<Food/>}/>
        <Route path="/detaildescription/:id" element = {<BlogPage/>}/>
        {/* <Route path="/*" element = {<Error/>}/> */}
    </Routes>
   </>
  )
}

export default RouterComp
