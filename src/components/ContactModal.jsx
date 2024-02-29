const ContactModal = ({ contact, onClose }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Contact Details</h5>
        <button type="button" className="close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Phone: {contact.phone}</p>
        <p>Country: {contact.country.name}</p>
      </div>
    </div>
  );
};

export default ContactModal;
