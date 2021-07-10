import React, { useState } from "react";
import "./signin.css";
import { StyledButton, StyledInput } from "./CustomStyledComponents";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin-container">
      <p className="welcome-msg bold-text">WELCOME TO SITE CONTROL</p>
      <StyledInput
        type="text"
        name="userName"
        value={userName}
        className="signin-inputs"
        placeholder="USERNAME"
        onChange={(e) => setUserName(e.target.value)}
      />
      <StyledInput
        type="password"
        name="password"
        value={password}
        className="signin-inputs"
        placeholder="PASSWORD"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton className="signin-btn">Sign In</StyledButton>
      <a className="login-links">Forgot your details?</a>
      <a className="login-links bold-text">Product Of Kreya Infratech</a>
    </div>
  );
};

export default SignIn;
