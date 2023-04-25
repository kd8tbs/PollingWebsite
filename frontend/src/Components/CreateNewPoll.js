import React, { useEffect, useState } from "react";
import posts from "../records.json";

function CreateNewPoll({ closeModal }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [answerList, setAnswerList] = useState([{ label: "", answerweight: 0 }]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddAnswer = () => {
    setAnswerList([...answerList, { label: "", answerweight: 0  }]);
  };

  const handleRemoveAnswer = (index) => {
    const list = [...answerList];
    list.splice(index, 1);
    setAnswerList(list);
  };

  const handleAnswerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...answerList];
    list[index][name] = value;
    console.log(list);
    setAnswerList(list);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/polls", {
      method: "POST",
      body: JSON.stringify({
        id: posts.polls.length + 1,
        question: title,
        answers: answerList,
        category: category,
        pollCount: 0,
        likes: 0,
        answered: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));

    closeModal();
  };

  return (
    <div className="modalBackdrop">
      <form className="modalContainer" onSubmit={handleSubmit}>
        <div className="title">
          <h1>Create a Poll</h1>
          <button onClick={closeModal} id="modalCloseBtn">
            X
          </button>
        </div>
        <div className="body">
          <label>Title</label>
          <input type="text" required onChange={(e) => handleTitleChange(e)} />

          <label for="category">Category</label>
          <select name="category" onChange={(e) => handleCategoryChange(e)}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Gaming">Gaming</option>
            <option value="Movies">Movies</option>
            <option value="TV">TV</option>
            <option value="Pop Culture">Pop Culture</option>
          </select>

          <label>Answer Options</label>
          {answerList.map((singleAnswer, index) => (
            <div key={index} className="answerContainer">
              <div className="col-75">
                <input
                  name="label"
                  type="text"
                  required
                  value={singleAnswer.label}
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
          <div className="footerContents">
            <div></div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateNewPoll;
