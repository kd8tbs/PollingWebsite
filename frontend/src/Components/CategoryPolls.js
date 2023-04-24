import React from "react";

function CategoryPolls({ handleModal, featuredPolls, handleSection }) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <h1>{featuredPolls[0].category}</h1>
        <button id="optionsButton" onClick={() => handleSection()}>
          Go Back to Featured Content
        </button>
      </div>
      <div className="featuredPostContainer">
        {featuredPolls[0].polls.map((post, index) => (
          <div
            key={index}
            className="featuredPost"
            onClick={() => handleModal(handleModal, post)}
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
    </>
  );
}

export default CategoryPolls;
