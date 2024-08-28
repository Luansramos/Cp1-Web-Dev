import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/sobre" activeClassName="active">
          Sobre
        </NavLink>
        <NavLink to="/contato" activeClassName="active">
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
