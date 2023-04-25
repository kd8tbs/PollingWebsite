import React, { useEffect, useState } from "react";

function ProfileModal({ username, closeProfileModal, handleLogout, handleModal, profilePolls }) {

  return (
    <>
      <div className="modalBackdrop">
        <div
          className="modalContainer"
          style={{ maxWidth: "1200px", width: "80%", maxHeight: "100%" }}
        >
          <div className="title">
            <h1 id="question">{username}'s Profile</h1>
            <button onClick={() => closeProfileModal()} id="modalCloseBtn">
              X
            </button>
          </div>
          <div className="body">
            <div className="featuredPollContainer">
              <div className="featuredPollContent" style={{ padding: "0" }}>
                <div
                  className="featuredPostContainer"
                  style={{ flexWrap: "wrap" }}
                >
                  {profilePolls?.polls !== undefined
                    ? profilePolls?.polls.map((post, index) => (
                        <div
                          key={index}
                          className="featuredPost"
                          onClick={() => handleModal(post)}
                        >
                          <div className="featuredPostTitle">
                            <h2>{post.question}</h2>
                          </div>

                          <div className="featuredPostLikes">
                            <h3>{post.likes} Likes</h3>
                          </div>
                        </div>
                      ))
                    : undefined}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footerContents">
              <div></div>
              <input
                type="button"
                value="Logout"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
