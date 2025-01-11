import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import soleraLightning from "../images/lightning.png";

export default function Header() {
  return (
    <div className="header__wrapper">
      <header className="header">
        {
          //<img src={soleraLightning} className="header__logo" />
        }
        <div className="header__text-container">
          <>
            <h3 className="header__text">eduardo.parker@solera</h3>
            <button className="header__button">Cerrar Sesion</button>
          </>
        </div>
      </header>
    </div>
  );
}
