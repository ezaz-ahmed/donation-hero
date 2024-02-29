import { useState, useEffect, useRef } from "react";
import { ModalBody } from "./ModalBody";

const Modal = ({
  contact,
  showModal,
  setShowModal,
  page,
  setPage,
  handleAllContactsClick,
  handleUsContactsClick,
}) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [even, setEven] = useState(false);
  const [lastPage, setLastPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const prevContactRef = useRef(null);

  const cache = {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "";
        if (contact === "all") {
          apiUrl = `https://contact.mediusware.com/api/contacts/?search=${searchQuery}&page=${page}`;
        } else {
          apiUrl = `https://contact.mediusware.com/api/country-contacts/us/?search=${searchQuery}&page=${page}`;
        }

        if (cache[apiUrl]) {
          if (page !== lastPage) {
            setContacts((prevContacts) => [...prevContacts, ...cache[apiUrl]]);
            setLastPage(page);
          }
        } else {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          cache[apiUrl] = data.results;
          setContacts(data.results);
          setHasMore(data.next !== null);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (prevContactRef.current !== null && contact !== prevContactRef.current) {
      setContacts([]);
    }

    prevContactRef.current = contact;

    fetchData();
  }, [contact, searchQuery, page, lastPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, hasMore]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{
        display: showModal ? "block" : "none",
        position: "fixed",
        zIndex: 200,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document"
        style={{ maxWidth: "800px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {contact === "all" ? "All Contacts" : "US Contacts"}{" "}
            </h5>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn"
                style={{ backgroundColor: "#46139f", color: "#ffffff" }}
                type="button"
                onClick={handleAllContactsClick}
              >
                All Contacts
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "#ff7f50", color: "#ffffff" }}
                type="button"
                onClick={handleUsContactsClick}
              >
                US Contacts
              </button>

              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #46139f",
                  color: "#46139f",
                }}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <ModalBody
              contacts={contacts}
              even={even}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              page={page}
              setPage={setPage}
            />
            {isLoading && <p className="text-center">Loading....</p>}
            {isError && (
              <p className="text-center text-danger">
                Failed to fetch data....
              </p>
            )}
            {!isLoading && !isError && hasMore && (
              <div ref={loader} style={{ textAlign: "center" }}>
                <p>Loading more...</p>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue={even}
                onClick={() => setEven(!even)}
                id="flexCheckIndeterminate"
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckIndeterminate"
              >
                Only Even
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
