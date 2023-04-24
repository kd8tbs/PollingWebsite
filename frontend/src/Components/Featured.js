import React from "react";

function Featured({ handleModal, featuredPolls, handleSection }) {
  console.log(featuredPolls[0]);

  return (
    <>
      {featuredPolls.map((section, index) => (
        <div key={index}>
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <h1>{section.category}</h1>
            <button id="optionsButton" onClick={() => handleSection()}>See More +</button>
          </div>
          <div className="featuredPostContainer">
            {section.polls.map((post, index) => (
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
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Featured;
