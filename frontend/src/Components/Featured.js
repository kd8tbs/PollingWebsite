import React from "react";
import featuredPosts from "../records.json";

function Featured({ handleModal }) {
  const featuredCategories = ["Gaming", "Movies", "TV", "Pop Culture"];

  return (
    <>
      <div className="featuredContainer">
        <div className="featuredContent">
          {featuredCategories.map((category) => (
            <>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "15px" }}
              >
                <h1>{category}</h1>
                <button id="optionsButton">See More +</button>
              </div>
              <div className="featuredPostContainer">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
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
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Featured;

{
  /* <div className="featuredContainer">
        <div className="featuredContent">
          {featuredPosts.map((category, index) => (
            <>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "15px" }}
              >
                <h1>{category.category}</h1>
                <button id="optionsButton">See More +</button>
                make buttons work 
              </div>

              <div className="featuredPostContainer">
                {featuredGamingPosts.map((post, index) => (
                  <div
                    // key={post.id}
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
            </>
          ))}
        </div>
      </div> */
}
