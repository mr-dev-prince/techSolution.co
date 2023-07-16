import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header">
      <h1>techSolutions.co</h1>
      <main>
        <nav>
          <ul>
            <li>
              <HashLink to={"/#Home"}>Home</HashLink>
            </li>
            <li>
              <HashLink to={"/#About"}>About</HashLink>
            </li>
            <li>
              <HashLink to={"/#Brands"}>Brands</HashLink>
            </li>
            <li>
              <HashLink to={"/Contact"}>Contact</HashLink>
            </li>
            <li>
              <HashLink to={"/Services"}>Services</HashLink>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Header;
