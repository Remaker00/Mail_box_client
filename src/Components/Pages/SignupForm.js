import React, { useState } from 'react';
import styles from '../Styles/SignupForm.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            alert('Password and Confirm Password do not match');
        } else {
            const dataToSend = {
                email: formData.email,
                password: formData.password,
            };
            console.log("Data IS:", dataToSend);

            axios.post('http://localhost:4000/user/addUser', { dataToSend })
                .then(() => {
                    alert('Account Successfully Created: ');
                    setFormData({
                        email: '',
                        password: '',
                        confirm_password: '',
                    });
                })
                .catch((error) => {
                    alert(error.response.data);
                });
        }
    };

    return (
        <div className={styles.Container}>
            <div className={styles.formContainer}>
                <h2>Sign Up</h2>
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
                    <input
                        type="password"
                        name='confirm_password'
                        placeholder='Confirm Password'
                        required
                        value={formData.confirm_password}
                        onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account?{' '}
                    <Link to="/login-form" className={styles.toggleLink}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
