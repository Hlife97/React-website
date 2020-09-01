import { render } from "@testing-library/react";
import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MIA 
          </Link>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
