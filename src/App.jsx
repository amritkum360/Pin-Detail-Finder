import React from "react"
import ByName from "./Components/ByName"
import ByPin from "./Components/ByPin"
// const Post = 'mairwa'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"

export default function App(){
 
  return(
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<ByPin />} />
   <Route path="/pinbyname" element={<ByName />} />
   {/* <Route path="/" element={<NavBar />} /> */}
   </Routes>
   </BrowserRouter>
    
    </>
  )
}