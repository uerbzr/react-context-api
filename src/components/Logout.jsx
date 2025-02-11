import React from "react";

function Logout({ setLoggedInAs }) {
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
