import React from "react";
import logo from "../Images/logo.png";
import headshot from "../Images/headshot.jpg";

function NavBar({ createPoll, login, handleLoginModal }) {
  return (
    <div className="navBarContainer">
      <div className="navBarContent">
        <img src={logo} alt="" />
        <div className="rightContent">
          <button
            style={{ marginRight: "10px" }}
            onClick={() => {
              createPoll();
            }}
          >
            Create Poll
          </button>
          {!login ? (
            <button style={{ width: "100px" }} onClick={() => handleLoginModal()}>
              Login
            </button>
          ) : (
            <img src={headshot} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
