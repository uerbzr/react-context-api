import React, { useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
function App() {
  const [loggedInAs, setLoggedInAs] = useState("");

  return (
    <>
      <h1>{loggedInAs ? loggedInAs : "Anonymous"}</h1>
      {!loggedInAs && (
        <Login loggedInAs={loggedInAs} setLoggedInAs={setLoggedInAs} />
      )}
      {loggedInAs && <Logout setLoggedInAs={setLoggedInAs} />}
    </>
  );
}

export default App;
