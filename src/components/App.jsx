import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../pages/index.css";
/*import "../blocks/App.css";*/
import Header from "./Header";
import Nav from "./Nav";
import Form_window from "./FormWindow";
import Footer from "./Footer";
import WindowReport from "./WindowReport";
import Home from "./Home";

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

  return (
    <>
      <div
        className="page"
        onKeyDown={(e) => e.key === "Escape" && allClose()}
        tabIndex={0}
      >
        <Header />
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
        <Footer />
      </div>
    </>
  );
}

export default App;
