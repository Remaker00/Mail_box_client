import React, { useState } from 'react';
import '../Styles/EmailEditor.css';
import PersonIcon from '@mui/icons-material/Person';
import { Editor } from "react-draft-wysiwyg";
import Navbar from './Navbar';
import axios from 'axios';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EmailEditor = () => {

    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        description: '',
    });

    const editorOptions = {
        toolbar: {
            options: ["inline", "blockType", "list", "link", "remove"],
        },
    };

    const handlemailsent = (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        const dataToSend = {
            email: formData.email,
            subject: formData.subject,
            description: formData.description
        };
        console.log("Mail IS:", dataToSend);

        axios.post('http://localhost:4000/mail/sent-mail', dataToSend, {
            headers: {
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    alert(response.data.message); // Display success message
                    setFormData({
                        email: '',
                        subject: '',
                        description: '',
                    });
                } else if (response.status === 404) {
                    alert(response.data.error);
                } else {
                    alert(response.data.error); // Handle other errors
                }
            })
            .catch((error) => {
                alert('An error occurred'); // Handle network errors
            });
    }


    return (
        <div>
            <Navbar />
            <div className="email-editor">
                <label>To:</label>
                <div className="mailbox">
                    <PersonIcon className="mailogo" />
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter mail id...'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <hr />
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        name='subject'
                        placeholder='Subject...'
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}

                    />
                </div>
                <hr />
                <div>
                    <label>Message:</label>
                    <Editor className="editor"
                        toolbar={editorOptions.toolbar} />
                    <textarea
                        name='description'
                        placeholder='Type here...'
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>
                <hr />
                <button onClick={handlemailsent}>Send Email</button>
            </div>
        </div>
    );
};


export default EmailEditor;
