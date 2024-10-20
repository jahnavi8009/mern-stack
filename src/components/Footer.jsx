import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>EVENTS</h4>
                <ul>
                    <li>BIRTHDAY</li>
                    <li>ANNIVERSARY</li>
                    <li>ENTERTAINMENT</li>
                    <li>PROFESSIONAL</li>
                    <li>PARTY</li>
                    <li>WEDDING</li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>CUSTOMER POLICIES</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms Of Use</li>
                    <li>Track Orders</li>
                    <li>Planning</li>
                    <li>Cancellation</li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Get the app on</h4>
                <div className="app-buttons">
                    <a 
                        href="https://play.google.com/store" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                            alt="Get it on Google Play" 
                            className="app-badge"
                        />
                    </a>

                    <a 
                        href="https://www.apple.com/app-store/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                            alt="Download on the App Store" 
                            className="app-badge"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
