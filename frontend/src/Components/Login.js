import React, { useState } from "react";

function Login({ handleLogin, handleLoginModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    if (username === "pollinate" && password === "password") {
      handleLogin();
    } else {
      alert("wrong username or password");
    }
  };

  return (
    <div className="modalBackdrop" >
      <form className="modalContainer" style={{ height: "350px" }} onSubmit={handleSubmit}>
        <div className="title">
          <h1>Login</h1>
          <button onClick={() => handleLoginModal()} id="modalCloseBtn">
            X
          </button>
        </div>

        <div className="body">
          <div className="featuredPollContainer">
            <div className="featuredPollContent" style={{ padding: "0" }}>
              <div className="answers">
                <label className="">
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
              </div>


            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footerContents">
            <button id="newAccountButton">Create New Account</button>
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
