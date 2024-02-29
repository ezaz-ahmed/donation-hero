import { useState } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState("");
  const [page, setPage] = useState(1);
  let navigate = useNavigate();

  const handleAllContactsClick = () => {
    navigate("/problem-2/all-contacts");
    setContact("all");
    setPage(1);
    setShowModal(true);
  };

  const handleUsContactsClick = () => {
    navigate("/problem-2/us-contacts");
    setContact("us");
    setPage(1);
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleAllContactsClick}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={handleUsContactsClick}
          >
            US Contacts
          </button>
        </div>
      </div>

      <Modal
        contact={contact}
        showModal={showModal}
        setShowModal={setShowModal}
        page={page}
        setPage={setPage}
        handleAllContactsClick={handleAllContactsClick}
        handleUsContactsClick={handleUsContactsClick}
      />
    </div>
  );
};

export default Problem2;
