import React from "react";

// function handleSeeMore({ handleModal, category }) {
//   let polls;

//   const fetchPolls = async () => {
//     let response = await fetch(
//       "http://localhost:3000/polls?category=" +
//         category +
//         "&_sort=likes&_order=asc"
//     );
//     polls = await response.json();
//   };

//   (async () => await fetchPolls())();

//   console.log(polls);
//   return (
//     <div className="featuredContainer">
//       <div className="featuredContent">
//         <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
//           <h1>{category}</h1>
//         </div>
//         <div className="featuredPostContainer">
//           {polls.map((post, index) => (
//             <div
//               key={index}
//               className="featuredPost"
//               onClick={() => handleModal(post)}
//             >
//               <div className="featuredPostTitle">
//                 <h2>{post.question}</h2>
//               </div>

//               <div className="featuredPostLikes">
//                 <h3>{post.likes} Likes</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function Featured({ handleModal, featuredCategories, isLoading }) {
  return (
    <>
      {isLoading ? (
        <h1 style={{ textAlign: "center", margin: "20px" }}>Is Loading...</h1>
      ) : (
        <div className="featuredContainer">
          <div className="featuredContent">
            {featuredCategories.map((section, index) => (
              <div key={index}>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "15px" }}
                >
                  <h1>{section.category}</h1>
                  <button
                    id="optionsButton"
                  >
                    See More +
                  </button>
                </div>
                <div className="featuredPostContainer">
                  {section.polls.map((post, index) => (
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
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Featured;
