import React, { useEffect, useState } from "react";
import post from "../records.json";

function Poll({ closePollModal, currPoll }) {
  const [answered, setAnswered] = useState(false);
  const [lastSelected, setLastSelected] = useState(0);
  const [jsonObjIndex, setJsonObjIndex] = useState(0);

  useEffect(() => {
    if (currPoll.answered === true) setAnswered(true);
  }, [currPoll.answered]);

  function handleSelected(index) {
    // update answerWeight
    if (currPoll.answered === true) {
      setAnswered(true);
    }

    if (answered === false) {
      setAnswered(true);
      setLastSelected(index);
      for (let i = 0; i < post.length; i++) {
        // increment answer value and increase poll count
        if (currPoll.id === post[i].id) {
          post[i].answers[index].answerWeight++;
          post[i].pollCount++;
          post[i].answered = true;
          setJsonObjIndex(i);
          console.log(post[i]);
          return;
        }
      }
    }

    if (index === lastSelected) {
      return;
    }

    // selecting a different answer
    post[jsonObjIndex].answers[index].answerWeight++;
    post[jsonObjIndex].answers[lastSelected].answerWeight--;
    setLastSelected(index);
  }

  function calculatePercentage(num) {
    return ((num / currPoll.pollCount) * 100).toFixed(2);
  }

  return (
    <>
      <div className="modalBackdrop">
        <div
          className="modalContainer"
          style={{ maxWidth: "1200px", width: "80%", maxHeight: "100%" }}
        >
          <div className="title">
            <h1 id="question">{currPoll.question}</h1>
            <button onClick={closePollModal} id="modalCloseBtn">
              X
            </button>
          </div>
          <div className="body">
            <div className="featuredPollContainer">
              <div className="featuredPollContent" style={{ padding: "0" }}>
                <div className="answers" style={{ color: "#fff" }}>
                  {!answered ? (
                    <>
                      {currPoll.answers.map((answer, index) => (
                        <button
                          id="answer"
                          style={{
                            color: "var(--accentcolor)",
                            border: "1px solid var(--accentcolor)",
                          }}
                          onClick={() => {
                            handleSelected(index);
                          }}
                        >
                          {answer.label}
                        </button>
                      ))}
                    </>
                  ) : (
                    <>
                      {currPoll.answers.map((answer, index) => (
                        <button
                          id="answer"
                          style={{
                            border: "1px solid var(--accentcolor)",
                          }}
                          onClick={() => {
                            handleSelected(index);
                          }}
                        >
                          <span
                            className="label"
                            style={{ color: "var(--primarycolor)" }}
                          >
                            {answer.label}
                          </span>
                          <span
                            className="percentage"
                            style={{ color: "var(--accentcolor)" }}
                          >
                            {calculatePercentage(answer.answerWeight)}%
                          </span>
                          <span
                            className="percentageBar"
                            style={{
                              background: "var(--accentcolor)",
                              width: `calc(${calculatePercentage(
                                answer.answerWeight
                              )}%)`,
                            }}
                          ></span>
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footerContents">
              <h1 id="optionsButton" style={{ fontSize: "22px" }}>
                Likes {currPoll.likes}
              </h1>
              <div>
                <button
                  style={{ fontSize: "22px" }}
                  onClick={() => currPoll.decreaseLikeValue()}
                  id="optionsButton"
                >
                  -
                </button>
                <button
                  style={{ fontSize: "22px" }}
                  onClick={() => currPoll.increaseLikeValue()}
                  id="optionsButton"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poll;
