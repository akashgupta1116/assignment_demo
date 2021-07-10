import React, { useState } from "react";
import { StyledButton, StyledInput } from "./CustomStyledComponents";

const logoStyle = {
  marginTop: "20%",
  width: "35vh"
};

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div style={logoStyle}>
        <img
          style={{ width: "100%" }}
          src={require("../../assets/Logo 2 iteration.png")}
          alt="logo"
        />
      </div>
      <p className="headline bold-text">WELCOME TO SITE CONTROL</p>
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
      <a className="links">Forgot your details?</a>
      <a className="links bold-text">Product Of Kreya Infratech</a>
    </div>
  );
};

export default SignIn;

/* TODO:
 * Inline Stylining to removed
 * Logo need to changed
 */
