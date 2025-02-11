import React, { useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
export const LoginContext = createContext();
function App() {
  const [loggedInAs, setLoggedInAs] = useState("");

  return (
    <>
      <LoginContext.Provider value={{ loggedInAs, setLoggedInAs }}>
        <h1>{loggedInAs ? loggedInAs : "Anonymous"}</h1>
        {!loggedInAs && <Login />}
        {loggedInAs && <Logout />}
      </LoginContext.Provider>
    </>
  );
}

export default App;
