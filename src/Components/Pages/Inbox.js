import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import '../Styles/Inbox.css'
import EmailView from './EmailView';

const Inbox = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:4000/mail/get-mail', {
                headers: {
                    Authorization: token,
                },
            });

            if (Array.isArray(response.data.receivedEmails)) {
                setEmails(response.data.receivedEmails);
            } else {
                console.error('Received data is not an array:', response.data);
            }
        } catch (error) {
            console.error('Failed to fetch email data:', error);
        }
    };

    const handleEmailClick = (email) => {
        if (!email.read) {
            console.log(email._id);
            axios.put(`http://localhost:4000/mail/mark-read/${email._id}`)
                .then((response) => {
                    const updatedEmails = emails.map((e) =>
                        e.id === email.id ? { ...e, read: true } : e
                    );
                    setEmails(updatedEmails);
                    setSelectedEmail(email);
                    fetchEmails();
                })
                .catch((error) => {
                    console.error('Failed to mark as read:', error);
                });
        } else {
            setSelectedEmail(email);
        }
    };


    useEffect(() => {
        fetchEmails();
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
                    {emails.map((email) => (
                        <div
                            key={email.id}
                            className={`email ${email.read ? 'read' : 'unread'}`}
                            onClick={() => handleEmailClick(email)}
                        >
                            {!email.read && <div className="blue-dot"></div> /* Add a blue dot for unread emails */}
                            <div className="email-sender">{email.sender_mail}</div>
                            <div className="email-subject">{email.subject}</div>
                            <div className="email-message">{email.description}</div>
                            <div className="email-date">{formatDateString(email.sentDate)}</div>
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

export default Inbox;
