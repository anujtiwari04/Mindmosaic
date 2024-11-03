import React,{ useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from '../images/logo.png';
import { useAuth } from './AuthContext';


const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [data,setData] = useState({ email: '',password: '' });
    const [error,setError] = useState(null);

    const handleInputChange = (e) => {
        const { name,value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleLogin = async () => {
        try {
            const res = await fetch('https://mindmosaic-server.vercel.app/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                const result = await res.json();
                console.log("Login successful:",result);
                login(); // Set authentication state to true
                navigate("/home");
            } else {
                const message = await res.text();
                setError(message);
            }
        } catch (error) {
            console.error("Error during login:",error);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <img src={logo} alt="logo" className="logo-image" />
            <div className="login-container">
                <div className="form-container">
                    <h2 className="form-heading">Login</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    >
                        <div className="input-wrapper">
                            <label htmlFor="email" className="input-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="input-field"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password" className="input-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="input-field"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                id="remember-me"
                                name="remember-me"
                                className="checkbox-field"
                            />
                            <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            Login
                        </button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                    <p className="signup-prompt">
                        Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
