import React from 'react';
import '../Styles/EmailEditor.css';
import PersonIcon from '@mui/icons-material/Person';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EmailEditor = () => {

    const editorOptions = {
        toolbar: {
            options: ["inline", "blockType", "list", "link", "remove"],
        },
    };


    return (
        <div className="email-editor">
            <label>To:</label>
            <div className="mailbox">
                <PersonIcon className="mailogo" />
                <input
                    type="text"
                    placeholder='Enter mail id...'
                />
            </div>
            <hr />
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    placeholder='Subject...'
                />
            </div>
            <hr />
            <div>
                <label>Message:</label>
                <Editor className="editor"
                    toolbar={editorOptions.toolbar} />
                <textarea
                    placeholder='Type here...'
                />
            </div>
            <hr />
            <button>Send Email</button>

        </div>
    );
};


export default EmailEditor;
