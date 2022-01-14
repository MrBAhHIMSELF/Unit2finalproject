import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/Billiards Table">Billiards Table</NavLink>
        </li>
        <li>
          <NavLink to="/Call Of Duty">Call Of Duty</NavLink>
        </li>
        <li>
          <NavLink to="/Cold drinks">Cold drinks</NavLink>
        </li>
        <li>
          <NavLink to="/Basketball court">Basketball court</NavLink>
        </li>
        <li>
          <NavLink to="/Go karts">Go karts</NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navigation;
