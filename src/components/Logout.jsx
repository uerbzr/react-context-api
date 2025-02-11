import Reac, { useState, useContext } from "react";
import { LoginContext } from "../App";

function Logout() {
  const { setLoggedInAs } = useContext(LoginContext);
  const handleLogout = (e) => {
    setLoggedInAs("");
  };
  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}

export default Logout;
