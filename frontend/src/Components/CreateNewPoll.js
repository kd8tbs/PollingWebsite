import React, { useState } from "react";

function CreateNewPoll({ closeModal }) {
  const [addDesc, setAddDesc] = useState(false);
  const [answerList, setAnswerList] = useState([{answer: ""}]);

  console.log(answerList);

  function handleDesc() {
    setAddDesc(!addDesc);
  }

  const handleAddAnswer = () => {
    setAnswerList([...answerList, { answer: "" }]);
  };

  const handleRemoveAnswer = (index) => {
    const list = [...answerList];
    list.splice(index, 1);
    setAnswerList(list);
  };

  const handleAnswerChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...answerList];
    list[index][name] = value;
    setAnswerList(list);
  };

  return (
    <form className="modalContainer">
      <div className="title">
        <h1>Create a Poll</h1>
        <button onClick={closeModal} id="modalCloseBtn">
          X
        </button>
      </div>
      <div className="body">
        <label>Title</label>
        <input type="text" required />

        <div>
          {addDesc ? (
            <button
              id="optionsButton"
              onClick={() => {
                handleDesc();
              }}
            >
              - description
            </button>
          ) : (
            <button
              id="optionsButton"
              onClick={() => {
                handleDesc();
              }}
            >
              + description
            </button>
          )}
        </div>
        {addDesc && <label>Description</label>}
        {addDesc && <input type="text" required />}

        {/* Answer Options
         - map options onto modal
         - add/remove options */}
        <label>Answer Options</label>
        {answerList.map((singleAnswer, index) => (
          <div key={index} className="answerContainer">
            <div className="col-75">
              <input
                name="answer"
                type="text"
                required
                value={singleAnswer.answer}
                onChange={(e) => handleAnswerChange(e, index)}
              />
              {answerList.length - 1 === index && answerList.length < 4 && (
                <button
                  id="optionsButton"
                  style={{ display: "flex" }}
                  onClick={handleAddAnswer}
                >
                  + answer
                </button>
              )}
            </div>
            <div className="col-25">
              {answerList.length > 1 && (
                <button
                  id="removeButton"
                  onClick={() => handleRemoveAnswer(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default CreateNewPoll;
