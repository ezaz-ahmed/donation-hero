import { useState } from "react";
import ContactModal from "./ContactModal";

export const ModalBody = ({ contacts, even }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = (contact) => {
    setSelectedContact(contact);
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  let filteredContacts = contacts;

  if (even) {
    filteredContacts = contacts.filter((contact) => contact.id % 2 === 0);
  }

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p className="text-center">No contacts available</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Phone</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr
                  key={contact.id}
                  onClick={() => openModal(contact)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{contact.phone}</td>
                  <td>{contact.country.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {selectedContact && (
            <ContactModal contact={selectedContact} onClose={closeModal} />
          )}
        </>
      )}
    </>
  );
};
