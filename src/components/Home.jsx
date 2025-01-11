import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import soleraMain from "../images/solera-main.png";

export default function Home() {
  return (
    <>
      <img src={soleraMain} className="home__image" />
    </>
  );
}
