import React from "react"
import { useState } from "react"
// const Post = 'mairwa'

export default function App(){
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
      setPostOfficeName('Name not found');
    }
  }
  return(
    <>
    <input type="text" name="" id=""  placeholder="Enter A Place Name" onChange={(val)=>setSearchName(val.target.value)}/>
    <button onClick={GetAPIdata}>Click Here</button>
    <h1>This</h1>
    {
      showData?(<div style={{display:"flex", alignContent:"center", justifyContent:"center", flexDirection:"column"}}><h2>{showData.Name}({showData.Pincode})</h2>
      <h3>{showData.Description}</h3>
      <h3>BranchType: {showData.BranchType}</h3>
      <h3>Circle: {showData.Circle}</h3>
      <h3>District: {showData.District}</h3>
      <h3>Division: {showData.Division}</h3>
      <h3>Region: {showData.Region}</h3></div>):null
    }
    
    
    
    </>
  )
}