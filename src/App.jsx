import Header from "./components/Header";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);

  const handleParam = (value) => {
    setIsNavbarClicked(value);
  };

  return (
    <>
      <Header param={handleParam} />
      <Timer />
      <div className={`overlay ${isNavbarClicked ? "active" : ""}`}></div>
    </>
  );
}

export default App;
