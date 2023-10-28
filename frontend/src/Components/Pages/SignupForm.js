import React, { useState } from 'react';
import styles from '../Styles/SignupForm.module.css';
import { Link } from 'react-router-dom';

const SignupForm = ({ onToggleForm, onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            onSignup(email, password);
        } else {
            alert('Passwords do not match.');
        }
    };

    return (
        <div className={styles.Container}>
            <div className={styles.formContainer}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
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
