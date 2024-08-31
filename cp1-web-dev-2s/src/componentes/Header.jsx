import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
