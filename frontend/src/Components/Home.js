import { useEffect, useState } from "react";
import CreateNewPoll from "./CreateNewPoll";
import Featured from "./Featured";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Poll from "./Poll";
import Login from "./Login";
import SectionManager from "./SectionManager";

export default function Home() {
  const [openPollModal, setOpenPollModal] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [login, setLogin] = useState(false);

  async function handlePollModalClose(post) {
    if (post.answered === true) {
      console.log(post);
      fetch("http://localhost:3000/polls/" + post.id, {
        method: "PATCH",
        body: JSON.stringify({
          id: post.id,
          question: post.question,
          answers: post.answers,
          category: post.category,
          pollCount: post.pollCount,
          likes: post.likes,
          answered: post.answered,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response => response.json())
      .then(json => console.log(json));
    }
    
    await setOpenPollModal(!openPollModal);
  }

  function handleModal() {
    setOpenModal(!openModal);
  }

  async function handlePollModal(post) {
    setClickedPost(post);
    await setOpenPollModal(!openPollModal);
  }

  function handleLogin() {
    setLogin(!login);
    setOpenLoginModal(!openLoginModal);
  }

  function handleLoginModal() {
    setOpenLoginModal(!openLoginModal);
    console.log("login: " + login + " modal: " + openLoginModal);
  }

  return (
    <div className="home">
      {/* Nav Bar Component */}
      <NavBar
        createPoll={handleModal}
        login={login}
        handleLoginModal={handleLoginModal}
      />
      <HeroSection />
      <SectionManager handleModal={handlePollModal} />
      {!openModal && !openPollModal && (
        <button
          className="openModalBtn"
          onClick={() => {
            handleModal();
          }}
        >
          +
        </button>
      )}
      {openModal && <CreateNewPoll closeModal={handleModal} />}
      {openPollModal && (
        <Poll closePollModal={handlePollModalClose} currPoll={clickedPost} />
      )}
      {openLoginModal && (
        <Login handleLogin={handleLogin} handleLoginModal={handleLoginModal} />
      )}
    </div>
  );
}
