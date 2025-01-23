import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../pages/index.css";
/*import "../blocks/App.css";*/
import Header from "./Header";
import Nav from "./Nav";
import Form_window from "./FormWindow";
import Footer from "./Footer";
import WindowReport from "./WindowReport";
import Login from "./Login";
import Register from "./Register";
import * as auth from "../utils/Auth.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { getToken, setToken } from "../utils/token.js";
import {
  Route,
  Routes,
  Outlet,
  Navigate,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

function App() {
  const [isDataWindowOpen, setIsDataWindowOpen] = useState(false);

  const OnDataClick = () => {
    setIsDataWindowOpen(!isDataWindowOpen);
    setIsMonthWindowOpen(false);
    setIsDeveloperOpen(false);
  };

  const [isMonthWindowOpen, setIsMonthWindowOpen] = useState(false);

  const onMonthClick = () => {
    setIsMonthWindowOpen(true);
    setIsDataWindowOpen(false);
    setIsMentorOpen(false);
    setIsDeveloperOpen(false);
  };

  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const onDeveloperClick = () => {
    setIsDeveloperOpen(true);
    setIsDataWindowOpen(false);
    setIsMonthWindowOpen(true);
    setIsMentorOpen(false);
  };

  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const onMentorClick = () => {
    setIsMonthWindowOpen(true);
    setIsMentorOpen(true);
    setIsDataWindowOpen(false);
    setIsDeveloperOpen(false);
  };

  const allClose = () => {
    setIsDataWindowOpen(false);
    setIsDeveloperOpen(false);
    setIsMentorOpen(false);
    setIsMonthWindowOpen(false);
  };

  // espacio para el handle registration
  const navigate = useNavigate();

  function handleRegistration({ email, contraseña }) {
    auth
      .register(email, contraseña)
      .then((res) => {
        alert(
          `registro realizado con exito para el siguiente usuario: ${email}`
        ),
          navigate("/inicio-sesion");
      })
      .catch((error) => {
        console.error;
        alert(error);
      });
  }

  // espacio para el handle Login
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState([]);

  function handleLogin({ email, contraseña }) {
    if (!email || !contraseña) {
      return;
    }
    auth
      .authorize(email, contraseña)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          setToken(data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error;
        alert(error);
      });
  }

  React.useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    auth
      .getUserInfo(token)
      .then((data) => {
        setIsLoggedIn(true);
        navigate("/");
        setEmail(data.email);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  return (
    <>
      <div
        className="page"
        onKeyDown={(e) => e.key === "Escape" && allClose()}
        tabIndex={0}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setIsLoggedIn={setIsLoggedIn} email={email} />
                <Outlet /> <Footer />
              </>
            }
          >
            <Route
              path="/"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <Nav
                      OnDataClick={OnDataClick}
                      onMonthClick={onMonthClick}
                      onDeveloperClick={onDeveloperClick}
                      onMentorClick={onMentorClick}
                    />
                    {
                      //<Home />
                    }
                    {isDataWindowOpen === true && <Form_window />}
                    {isMonthWindowOpen && (
                      <WindowReport
                        isDeveloperOpen={isDeveloperOpen}
                        isDataWindowOpen={isDataWindowOpen}
                        isMonthWindowOpen={isMonthWindowOpen}
                        isMentorOpen={isMentorOpen}
                      />
                    )}
                  </>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/registro"
              element={<Register handleRegistration={handleRegistration} />}
            ></Route>
            <Route
              path="/inicio-sesion"
              element={<Login handleLogin={handleLogin} />}
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/inicio-sesion" replace />
              )
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
