import { useState } from "react";
import { SlClock } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";
import "../styles/header.css";

const Header = ({ param }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  param(isClicked);

  return (
    <>
      <header>
        <div>
          <SlClock style={{ fontSize: "1.7rem" }} />
          <h1>Timer App</h1>
        </div>

        <FiSettings
          onClick={handleClick}
          style={{ fontSize: "1.7rem", cursor: "pointer" }}
          className="toggle"
        />
      </header>

      <div className={`settings ${isClicked ? "clicked" : ""}`}>
        <p>Profile</p>
        <p>Theme</p>
        <p>About</p>
      </div>
    </>
  );
};

export default Header;
