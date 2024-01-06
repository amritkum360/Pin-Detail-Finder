import React, { useState } from "react";
import NavBar from "./NavBar";

export default function ByPin() {
  const [showData, setShowData] = useState([]);
  const [searchPin, setSearchPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const postUrl = `https://api.postalpincode.in/pincode/${searchPin}`;

  const handleInputChange = (event) => {
    setSearchPin(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(postUrl);
      const result = await response.json();

      if (result && result[0]?.PostOffice) {
        setShowData(result[0].PostOffice);
        setErrorMessage('');
      } else {
        setShowData([]);
        setErrorMessage('No postal office found for this pincode');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setShowData([]);
      setErrorMessage('Error fetching data. Please try again.');
    }
  };

  return (
    <>
    <NavBar/>
      <h1 style={{ textAlign: "center" }}>Search In Detail By Pin</h1>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <input
          type="text"
          placeholder="Enter A Pin Number"
          value={searchPin}
          onChange={handleInputChange}
          style={{height:35, fontSize:20}}
        />
        <button onClick={fetchData} style={{marginLeft:10}}>Click Here</button>
      </div>

      {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}

      {showData.length > 0 && (
        <div>
          {showData.map((office, index) => (
            <div key={index} className="databyname">
              <h1 style={{ textDecoration: "underline" }}>{office.Name}({office.Pincode})</h1>
              {office.Description && <h3>{office.Description}</h3>}
              {office.BranchType && <h3>BranchType: {office.BranchType}</h3>}
              <h3 style={{display:"flex"}}>Circle: {office.Circle}</h3>
              <h3 style={{display:"flex"}}>District: {office.District}</h3>
              <h3 style={{display:"flex"}}>Division: {office.Division}</h3>
              <h3 style={{display:"flex"}}>Region: {office.Region}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
