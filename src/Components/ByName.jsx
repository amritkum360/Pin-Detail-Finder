import React from "react"
import { useState } from "react"
import NavBar from "./NavBar"
// const Post = 'mairwa'

export default function ByName(){
  const [showData, setShowData]= useState()
  const [searchName, setSearchName] =useState()

  const posturl = `https://api.postalpincode.in/postoffice/${searchName}`


  const GetAPIdata=async ()=>{
    const res = await fetch(posturl)
    const result = await res.json()
    console.log(result)
    if (result && result[0]?.PostOffice && result[0].PostOffice[0]?.Name) {
      setShowData(result[0].PostOffice[0]);
    } else {
      setPostOfficeName('Name not found tgit statushis time');
    }
  }
  return(
    <>
    <NavBar/>
    <h1 style={{display:"flex", alignContent:"center", justifyContent:"center"}}>Search In Detail By Name</h1>
    <div style={{display:"flex", alignContent:"center", justifyContent:"center", marginBottom:30}}><input type="text" name="" id=""  placeholder="Enter A Place Name" style={{height:35, fontSize:20}} onChange={(val)=>setSearchName(val.target.value)}/>
    <div style={{marginLeft:20}}>
    <button onClick={GetAPIdata}>Click Here</button></div></div>
    {/* <h1>This</h1> */}
    {
      showData?(<div className="databyname"><h1 style={{textDecoration:"underline"}}>{showData.Name}({showData.Pincode})</h1>
      {
        showData.Description?<h3>{showData.Description}</h3>:null
      }
      {
        showData.BranchType?<h3>BranchType: {showData.BranchType}</h3>:null
      }
      
      <h3  style={{display:"flex"}}>Circle: {showData.Circle}</h3>
      <h3  style={{display:"flex"}}>District: {showData.District}</h3>
      <h3 style={{display:"flex"}}>Division: {showData.Division}</h3>
      <h3 style={{display:"flex"}}>Region: {showData.Region}</h3></div>):null
    }
    
    
    
    </>
  )
}