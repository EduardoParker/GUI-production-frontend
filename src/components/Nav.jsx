import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import soleraLogo from "../images/solera.png";

export default function Nav({
  OnDataClick,
  onMonthClick,
  onDeveloperClick,
  onMentorClick,
}) {
  const handleDataClick = () => {
    OnDataClick();
  };
  const handleMonthClick = () => {
    onMonthClick();
  };

  const handleDeveloperClick = () => {
    onDeveloperClick();
  };

  const handleMentorClick = () => {
    onMentorClick();
  };
  return (
    <nav className="nav">
      <img src={soleraLogo} className="nav__image" />
      <ul className="nav__texts">
        <li>
          <p className="nav__text" onClick={handleDataClick}>
            Ingresar Datos
          </p>
        </li>
        <div className="nav__text-line"></div>
        <li>
          <p className="nav__text" onClick={handleMonthClick}>
            Reporte Mensual
          </p>
        </li>
        <div className="nav__text-line"></div>
        <li>
          <p className="nav__text" onClick={handleDeveloperClick}>
            Reporte por desarrollador
          </p>
        </li>
        <div className="nav__text-line"></div>
        <li>
          <p className="nav__text" onClick={handleMentorClick}>
            Reporte por celula
          </p>
        </li>
        <div className="nav__text-line"></div>
      </ul>
    </nav>
  );
}
