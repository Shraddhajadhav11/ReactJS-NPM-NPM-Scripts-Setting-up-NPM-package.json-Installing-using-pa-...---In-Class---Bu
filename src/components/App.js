import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = userState(false);
  const showfn = () => {
    setShow(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={showFn}>
        Show
      </button>
      {show === true && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
           // Do not alter the main div
        )}
     </div>
  );
}
export default App;
