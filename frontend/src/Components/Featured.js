import React from "react";
import records from "../records.json";

const featuredCategories = [
  { category: "Gaming", polls: [{}] },
  { category: "Movies", polls: [{}] },
  { category: "TV", polls: [{}] },
  { category: "Pop Culture", polls: [{}] },
];
const gamingPolls = [];
const moviePolls = [];
const tvPolls = [];
const pcPolls = [];

if (typeof window !== 'undefined') { // Check if we're running in the browser.
  for (let i = 0; i < records.polls.length; i++) {
    let currPoll = records.polls[i];
    
    switch (currPoll.category) {
      case "Gaming":
        if (gamingPolls.length < 5) {
          // fill up array
          gamingPolls[gamingPolls.length] = currPoll;
          break;
        } else {
          // check each poll and if the like value is less switch them out
          for (let x = 0; x < gamingPolls.lenght; x++) {
            if (gamingPolls[x].likes > currPoll.likes) {
              gamingPolls[x] = currPoll;
              break;
            }
            break;
          }
        }
        break;
      case "Movies":
        if (moviePolls.length < 5) {
          // fill up array
          moviePolls[moviePolls.length] = currPoll;
          break;
        } else {
          // check each poll and if the like value is less switch them out
          for (let x = 0; x < moviePolls.lenght; x++) {
            if (moviePolls[x].likes > currPoll.likes) {
              moviePolls[x] = currPoll;
              break;
            }
            break;
          }
        }
        break;
      case "TV":
        if (tvPolls.length < 5) {
          // fill up array
          tvPolls[tvPolls.length] = currPoll;
          break;
        } else {
          // check each poll and if the like value is less switch them out
          for (let x = 0; x < tvPolls.lenght; x++) {
            if (tvPolls[x].likes > currPoll.likes) {
              tvPolls[x] = currPoll;
              break;
            }
            break;
          }
        }
        break;
      case "Pop Culture":
        if (pcPolls.length < 5) {
          // fill up array
          pcPolls[pcPolls.length] = currPoll;
          break;
        } else {
          // check each poll and if the like value is less switch them out
          for (let x = 0; x < pcPolls.lenght; x++) {
            if (pcPolls[x].likes > currPoll.likes) {
              pcPolls[x] = currPoll;
              break;
            }
            break;
          }
        }
        break;
      default:
        break;
    }
  }

  featuredCategories[0].polls = gamingPolls;
  featuredCategories[1].polls = moviePolls;
  featuredCategories[2].polls = tvPolls;
  featuredCategories[3].polls = pcPolls;
}

function Featured({ handleModal }) {

  return (
    <>
      <div className="featuredContainer">
        <div className="featuredContent">
          {featuredCategories.map((section, index) => (
            <div key={index}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "15px" }}
              >
                <h1>{section.category}</h1>
                <button id="optionsButton">See More +</button>
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
        </div>
      </div>
    </>
  );
}

export default Featured;
