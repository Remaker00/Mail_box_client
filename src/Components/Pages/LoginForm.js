import React, { useState } from 'react';
import styles from '../Styles/SignupForm.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            email: formData.email,
            password: formData.password,
        };
        console.log("Data IS:", dataToSend);

        axios.post('http://localhost:4000/user/checkUser', { formData })
            .then((response) => {
                alert('Successfully Logged In: ');

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);
                setFormData({
                    email: '',
                    password: '',
                    confirm_password: '',
                });
                window.location.href = '/mail-box-client';
            })
            .catch((error) => {
                alert('Error Logging In: ');
            });
    }


    return (
        <div className={styles.Container}>
            <div className={styles.formContainer}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <Link to="/" className={styles.toggleLink}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};


export default LoginForm;
