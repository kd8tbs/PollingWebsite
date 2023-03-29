import { useState } from "react";
import CreateNewPoll from "./CreateNewPoll";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <div className="home">
      {!openModal && (
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
    </div>
  );
}
