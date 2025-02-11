import { useState, useContext } from "react";
import { LoginContext } from "../App";

function Login() {
  const { loggedInAs, setLoggedInAs } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    username: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedInAs(formData.username);
    setFormData({ username: "" });
  };
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          className="form-control"
          type="text"
          placeholder="Your usename?"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-primary btn-sm pull-right">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
