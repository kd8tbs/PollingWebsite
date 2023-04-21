import { useState } from "react";
import CreateNewPoll from "./CreateNewPoll";
import Featured from "./Featured";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Poll from "./Poll";

export default function Home() {
  const [openPollModal, setOpenPollModal] = useState(false);
  const [clickedPost, setClickedPost] = useState({});
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(!openModal);
  }
  
  async function handlePollModal(props) {
    setClickedPost(props);
    await setOpenPollModal(!openPollModal);
  }

  return (
    <div className="home">
      {/* Nav Bar Component */}
      <NavBar createPoll={handleModal}/>
      <HeroSection />
      <Featured handleModal={handlePollModal}/>
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
      {openPollModal && <Poll closePollModal={handlePollModal} currPoll={clickedPost}/>}
    </div>
  );
}
