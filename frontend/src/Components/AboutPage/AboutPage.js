import React from 'react';
import classes from './About.module.css';
import Header from './Header';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <div className={classes['container']}>
                <h1>ZUWAVA</h1>
                <h2>About Us</h2>
                <div className={classes['content']}>
                    <p>Welcome to Our E-Commerce Store!</p>
                    <p>
                        At Our Company, we are passionate about providing you with the best shopping experience. We offer a wide range of high-quality products at competitive prices, making it easy for you to find exactly what you need.
                    </p>
                    <p>
                        Our mission is to make online shopping convenient, reliable, and enjoyable for our customers. We are committed to delivering top-notch customer service and ensuring that you have a seamless shopping experience.
                    </p>
                    <p>
                        Our team of dedicated professionals works tirelessly to bring you the latest and greatest products. We believe in quality, innovation, and customer satisfaction.
                    </p>
                    <p>
                        Thank you for choosing Our Company. We look forward to serving you and exceeding your expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
