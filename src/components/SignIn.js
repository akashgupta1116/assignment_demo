import React, { useState } from "react";
import "./signin.css";
import { StyledButton, StyledInput } from "./CustomStyledComponents";

const SignIn = () => {
  const [formState, setFormState] = useState({
    userName: "",
    password: ""
  });

  const handleFormState = (e) => {
    setFormState({ ...setFormState, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin-container">
      <p className="welcome-msg bold-text">WELCOME TO SITE CONTROL</p>
      <StyledInput
        type="text"
        name="userName"
        value={formState.userName}
        className="signin-inputs"
        placeholder="USERNAME"
        onChange={handleFormState}
      />
      <StyledInput
        type="password"
        name="password"
        value={formState.password}
        className="signin-inputs"
        placeholder="PASSWORD"
        onChange={handleFormState}
      />
      <StyledButton className="signin-btn">Sign In</StyledButton>
      <a className="login-links">Forgot your details?</a>
      <a className="login-links bold-text">Product Of Kreya Infratech</a>
    </div>
  );
};

export default SignIn;
