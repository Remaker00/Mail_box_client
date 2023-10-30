import React from 'react';
import '../Styles/EmailView.css';

const EmailView = ({ selectedEmail, onClose }) => {
    return (
        <div className="email-view">
            <div className="date">{selectedEmail.sentDate}</div>
            <div className="sender">{selectedEmail.sender_mail}</div>
            <hr/>
            <label>Subject:</label>
            <div className="subject">{selectedEmail.subject}</div>
            <hr/>
            <div className="message">{selectedEmail.description}</div>
            <hr/>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default EmailView;
