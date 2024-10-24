import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

const LoginForm = () => {
  const [schoolName, setSchoolName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes manejar el evento de login
    console.log("Login:", { schoolName, password });
  };

  return (
    <div
      className="login-form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="login-form"
        style={{
          width: "300px",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Welcome, Log into your account</h2>
        <p>It is our great pleasure to have you on board!</p>

        <div className="p-field" style={{ marginBottom: "1rem" }}>
          <span className="p-float-label">
            <InputText
              id="school"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <label htmlFor="school">Enter the name of school</label>
          </span>
        </div>

        <div className="p-field" style={{ marginBottom: "1rem" }}>
          <span className="p-float-label">
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
            />
            <label htmlFor="password">Enter Password</label>
          </span>
        </div>

        <Button
          label="Login"
          className="p-button-primary"
          onClick={handleLogin}
          style={{ width: "100%" }}
        />

        <p style={{ marginTop: "1rem" }}>
          Already have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
