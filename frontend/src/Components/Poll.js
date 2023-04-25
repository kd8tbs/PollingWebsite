import React, { useState } from "react";
import post from "../records.json";

function Poll({ closePollModal, currPoll }) {
  const [lastSelected, setLastSelected] = useState(0);

  function handleSelected(index) {
    // if you have not answered the poll, update answered and increment answerweight
    if (currPoll.answered  === false) {
      currPoll.answered = true;
      setLastSelected(index);
      currPoll.pollCount++;
      currPoll.answers[index].answerWeight++;
      return;
    }

    // if you are selecting the same answer multiple times
    if (index === lastSelected) {
      return;
    }

    // selecting a different answer
    currPoll.answers[lastSelected].answerWeight--;
    currPoll.answers[index].answerWeight++;
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
            <button onClick={() => closePollModal(currPoll)} id="modalCloseBtn">
              X
            </button>
          </div>
          <div className="body">
            <div className="featuredPollContainer">
              <div className="featuredPollContent" style={{ padding: "0" }}>
                <div className="answers" style={{ color: "#fff" }}>
                  {!currPoll.answered ? (
                    <>
                      {currPoll?.answers !== undefined ? currPoll?.answers.map((answer, index) => (
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
                      )): undefined}
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
                            style={{ color: "black", textShadow: "0px 1px 4px var(--accentcolor)" }}
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
                  onClick={() => currPoll.likes--}
                  id="optionsButton"
                >
                  -
                </button>
                <button
                  style={{ fontSize: "22px" }}
                  onClick={() => {currPoll.like < 0 ? <></> : currPoll.likes++}}
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
