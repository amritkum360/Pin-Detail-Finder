import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you're using it for navigation

export default function NavBar() {
  return (
    <>
    <div></div>
    <div className="navouter">
      <div className="navlogo">
        <h1>Pin Finder</h1>
      </div>
      <div className="navlinks">
        <div className="navlink">
          <Link to="/">By Pin</Link>
        </div>
        <div className="navlink">
          <Link to="/pinbyname">By Name</Link>
        </div>
      </div>
    </div></>
  );
}
