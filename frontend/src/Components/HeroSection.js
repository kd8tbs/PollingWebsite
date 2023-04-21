import React, { useState } from "react";

function HeroSection() {
  const [answered, setAnswered] = useState(false);
  const [lastSelected, setLastSelected] = useState(0);
  const [poll, setPoll] = useState({
    question: "What's your favorite programming language?",
    answers: [
      { label: "C", answerWeight: 10 },
      { label: "Java", answerWeight: 20 },
      { label: "Python", answerWeight: 30 },
      { label: "Javascript", answerWeight: 40 },
    ],
    pollCount: 100,
    increaseAnswerValue: function (index) {
      this.answers[index].answerWeight++;
    },
    decreaseAnswerValue: function (index) {
      this.answers[index].answerWeight--;
    },
  });

  function handleSelected(index) {
    // update answerWeight
    if (answered === false) {
      setAnswered(true);
      setLastSelected(index);
      poll.increaseAnswerValue(index);
      poll.pollCount++;
      return;
    }

    if (index === lastSelected) {
      return;
    }

    // selecting a different answer
    poll.increaseAnswerValue(index);
    poll.decreaseAnswerValue(lastSelected);
    setLastSelected(index);

    poll.answers.forEach((element) => {
      console.log(element.label + ": " + element.answerWeight);
    });
  }

  function calculatePercentage(num) {
    return ((num / poll.pollCount) * 100).toFixed(2);
  }

  return (
    <div className="heroContainer">
      <div className="featuredPollContainer">
        <div className="featuredPollContent">
          <div className="question">
            <h1 id="question">{poll.question}</h1>
          </div>
          <div className="answers">
            {!answered ? (
              <>
                {poll.answers.map((answer, index) => (
                  <button
                    id="answer"
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
                {poll.answers.map((answer, index) => (
                  <button
                    id="answer"
                    onClick={() => {
                      handleSelected(index);
                    }}
                  >
                    <span className="label">{answer.label}</span>
                    <span className="percentage">
                      {calculatePercentage(answer.answerWeight)}%
                    </span>
                    <span
                      className="percentageBar"
                      style={{
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
  );
}

<script></script>;

export default HeroSection;
