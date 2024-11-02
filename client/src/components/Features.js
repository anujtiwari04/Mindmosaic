import React from 'react';
// import '../styles/Features.css';

const Features = () => {
    return (
        <div className="features-container">
            <h1>Our Features</h1>

            <div className="features-grid">
                <div className="feature-card">
                    <i className="fas fa-comments"></i>
                    <h3>24/7 Chat Support</h3>
                    <p>Connect with therapists anytime through our secure chat platform</p>
                </div>

                <div className="feature-card">
                    <i className="fas fa-video"></i>
                    <h3>Video Sessions</h3>
                    <p>Face-to-face virtual sessions with certified therapists</p>
                </div>

                <div className="feature-card">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Audio Calls</h3>
                    <p>Convenient voice calls for on-the-go therapy sessions</p>
                </div>

                <div className="feature-card">
                    <i className="fas fa-bell"></i>
                    <h3>Daily Wellness Updates</h3>
                    <p>Receive motivational quotes and helpful videos daily</p>
                </div>

                <div className="feature-card">
                    <i className="fas fa-user-shield"></i>
                    <h3>Privacy First</h3>
                    <p>Your data is encrypted and completely confidential</p>
                </div>

                <div className="feature-card">
                    <i className="fas fa-heart"></i>
                    <h3>Personalized Care</h3>
                    <p>Tailored therapy plans to meet your specific needs</p>
                </div>
            </div>
        </div>
    );
};

export default Features;