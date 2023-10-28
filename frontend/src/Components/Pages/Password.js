import React, { useState } from 'react';
import axios from 'axios';

const Password = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    axios.post('http://localhost:4000/password/send_mail', {email})
      .then((response) => {
        alert('Email Sent Success:', response.data);
        

      })
      .catch((error) => {
        alert('Error:', error);
      });
  };

  const handleToggleBack = () => {

    window.location.href = '/';
  }

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p onClick={handleToggleBack}>Back</p>
      </div>
    </div>
  );
};

export default Password;
