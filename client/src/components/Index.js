import React from 'react'
import frontImage from '../images/front.jpg';
import { Link } from 'react-router-dom';



const Index = () => {
    return (
        <>

            <div>
                {/*
                <header>
                    <div className="div1">
                        <Link to="/">
                            <div className="image">
                                <img src={logo} alt="logo" />
                                <p>Mindmosaic</p>
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <li><Link to={'/features'}>Features</Link></li>
                                <li><Link to={'/pricing'}>Pricing</Link></li>
                                <li><Link to={'/faq'}>FAQ</Link></li>
                            </ul>
                        </nav>
                    </div>

                     <div className="div3">
                        <button>
                            <Link to={'/login'}>Get Started</Link>
                        </button>
                    </div> 
                </header>
                */}

                <section className="hero">
                    <div className="container">
                        <div className="hero-text">
                            <h1>Unlock Your Mental Potential with Mindmosaic</h1>
                            <p>
                                Embark on a journey of self-discovery and emotional well-being. Mindmosaic is your personal guide to a healthier, happier mind.
                            </p>
                            <button>
                                <Link to={'/login'}>Get Started</Link>
                            </button>
                        </div>
                        <div className="hero-image">
                            <img src={frontImage} alt="Mindfulness Illustration" />
                        </div>
                    </div>
                </section>
            </div>

        </>

    )
}

export default Index
