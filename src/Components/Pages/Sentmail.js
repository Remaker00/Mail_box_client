import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import EmailView from './EmailView';

const SentMail = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [sentEmails, setSentEmails] = useState([]);

    const fetchSentEmails = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/mail/get-sent-mail', {
                headers: {
                    Authorization: token,
                },
            });

            if (Array.isArray(response.data.sentEmails)) {
                setSentEmails(response.data.sentEmails);
            } else {
                console.error('Received data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Failed to fetch sent email data:', error);
        }
    };

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    const handleDelete = (e, email) => {
        e.stopPropagation();

        console.log(email._id);
        axios.delete(`http://localhost:4000/mail/deletemail/${email._id}`)
            .then((response) => {
                if (response.status === 200) {
                    alert('Email deleted successfully');
                    fetchSentEmails();
                } else {
                    alert('Failed to delete email');
                }
            })
            .catch((error) => {
                alert('An error occurred while deleting the email:', error);
            });
    }

    useEffect(() => {
        fetchSentEmails();
    }, []);

    const formatDateString = (date) => {
        const formattedDate = new Date(date).toLocaleDateString();
        return formattedDate;
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="email-list">
                    {sentEmails.map((email) => (
                        <div
                            key={email.id}
                            className="email"
                            onClick={() => handleEmailClick(email)}
                        >
                            <div className="email-sender">{email.email}</div>
                            <div className="email-subject">{email.subject}</div>
                            <div className="email-message">{email.description}</div>
                            <div className="email-date">{formatDateString(email.sentDate)}</div>
                            <button onClick={(e) => handleDelete(e, email)}>X</button>
                        </div>
                    ))}
                </div>
                {selectedEmail && (
                    <div className="backdrop">
                        <EmailView
                            selectedEmail={selectedEmail}
                            onClose={() => setSelectedEmail(null)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentMail;
