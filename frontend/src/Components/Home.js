import { useEffect, useState } from "react";
import CreateNewPoll from "./CreateNewPoll";
import Featured from "./Featured";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Poll from "./Poll";
import Login from "./Login";

export default function Home() {
  const [openPollModal, setOpenPollModal] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const featuredCategories = [
    { category: "Gaming", polls: [{}] }, 
    { category: "Movies", polls: [{}] },
    { category: "TV", polls: [{}] },
    { category: "Pop Culture", polls: [{}] }, 
  ];

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        let response = await fetch(
          "http://localhost:3000/polls?category=Gaming&_limit=5&_sort=likes&_order=asc"
        );
        const gamingPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Movies&_limit=5&_sort=likes&_order=asc"
        );
        const moviePolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=TV&_limit=5&_sort=likes&_order=asc"
        );
        const tvPolls = await response.json();
        response = await fetch(
          "http://localhost:3000/polls?category=Pop Culture&_limit=5&_sort=likes&_order=asc"
        );
        const pcPolls = await response.json();

        featuredCategories[0].polls = gamingPolls;
        featuredCategories[1].polls = moviePolls;
        featuredCategories[2].polls = tvPolls;
        featuredCategories[3].polls = pcPolls;
      } catch (err) {
        console.log(err.stack);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => await fetchPolls())();
  }, [featuredCategories]);

  function handleModal() {
    setOpenModal(!openModal);
  }

  async function handlePollModal(props) {
    setClickedPost(props);
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

  // function json() {
  //   for (let i = 0; i < records.polls.length; i++) {
  //     let total = 0;
  //     for (let x = 0; x < records.polls[i].answers.length; x++){
  //       let value = Math.floor(Math.random() * 100);
  //       records.polls[i].answers[x].answerWeight = value;
  //       total = total + value;
  //     }
  //     records[i].polls.pollCount = total;
  //   }
  // }

  return (
    <div className="home">
      {/* Nav Bar Component */}
      <NavBar
        createPoll={handleModal}
        login={login}
        handleLoginModal={handleLoginModal}
      />
      <HeroSection />
      <Featured
        handleModal={handlePollModal}
        featuredCategories={featuredCategories}
        isLoading={isLoading}
      />
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
        <Poll closePollModal={handlePollModal} currPoll={clickedPost} />
      )}
      {openLoginModal && (
        <Login handleLogin={handleLogin} handleLoginModal={handleLoginModal} />
      )}
      {/* <button onClick={json()}></button> */}
    </div>
  );
}
