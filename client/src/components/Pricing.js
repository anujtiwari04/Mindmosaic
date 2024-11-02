import React from 'react';
// import '../styles/Pricing.css';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h1>Choose Your Plan</h1>
            <p className="pricing-subtitle">Find the perfect plan for your mental wellness journey</p>

            <div className="pricing-cards">
                <div className="pricing-card basic">
                    <h2>Basic</h2>
                    <div className="price">
                        <span className="currency">₹</span>
                        <span className="amount">499</span>
                        <span className="period">/month</span>
                    </div>
                    <ul>
                        <li>✓ Chat Support (Business Hours)</li>
                        <li>✓ Daily Motivational Quotes</li>
                        <li>✓ Weekly Wellness Videos</li>
                        <li>✗ Video Sessions</li>
                        <li>✗ Audio Calls</li>
                    </ul>
                    <button>
                        <Link to={'/login'}>Get Started</Link>
                    </button>
                </div>

                <div className="pricing-card premium">
                    <div className="popular-badge">Most Popular</div>
                    <h2>Premium</h2>
                    <div className="price">
                        <span className="currency">₹</span>
                        <span className="amount">999</span>
                        <span className="period">/month</span>
                    </div>
                    <ul>
                        <li>✓ 24/7 Chat Support</li>
                        <li>✓ 2 Video Sessions/month</li>
                        <li>✓ 4 Audio Calls/month</li>
                        <li>✓ Daily Motivational Content</li>
                        <li>✓ Priority Support</li>
                    </ul>
                    <button>
                        <Link to={'/login'}>Get Started</Link>
                    </button>
                </div>

                <div className="pricing-card ultimate">
                    <h2>Ultimate</h2>
                    <div className="price">
                        <span className="currency">₹</span>
                        <span className="amount">1499</span>
                        <span className="period">/month</span>
                    </div>
                    <ul>
                        <li>✓ Unlimited Chat Support</li>
                        <li>✓ 4 Video Sessions/month</li>
                        <li>✓ Unlimited Audio Calls</li>
                        <li>✓ Personalized Wellness Plan</li>
                        <li>✓ Premium Content Access</li>
                    </ul>
                    <button>
                        <Link to={'/login'}>Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;