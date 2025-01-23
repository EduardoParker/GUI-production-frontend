import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import soleraLightning from "../images/lightning.png";
import { removeToken } from "../utils/token";

export default function Header({ setIsLoggedIn, email }) {
  const navigate = useNavigate();

  function signOff() {
    removeToken();
    navigate("/registro");
    setIsLoggedIn(false);
  }

  const location = useLocation();
  React.useEffect(() => {}, [location]);

  return (
    <div className="header__wrapper">
      <header className="header">
        {
          //<img src={soleraLightning} className="header__logo" />
        }

        <div className="header__text-container">
          {location.pathname === "/" && (
            <>
              <h3 className="header__text">{email}</h3>
              <button className="header__button" onClick={signOff}>
                Cerrar Sesion
              </button>
            </>
          )}
          {location.pathname === "/registro" && (
            <Link to="/inicio-sesion" className="header__text">
              Iniciar Sesion
            </Link>
          )}
          {location.pathname === "/inicio-sesion" && (
            <Link to="/registro" className="header__text">
              Registrate
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}
