import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.png'



const Signup = () => {
    let [data,setdata] = useState({})

    let datavalue = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://mindmosaic-server.vercel.app//register',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

        alert("account created, please go to login page")



    }








    return (
        <>
            <img src={logo} alt="logo" className="logo-image" />

            <div className="signup-container">
                <div className="form-container">
                    <h2 className="form-heading">Sign Up</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-wrapper">
                            <label htmlFor="name" className="input-label">name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="input-field"
                                onChange={datavalue}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email" className="input-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="input-field"
                                onChange={datavalue}


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
                                onChange={datavalue}

                            />
                        </div>
                        <div className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                required
                                className="checkbox-field"
                            />
                            <label htmlFor="terms" className="checkbox-label">I agree to the terms and conditions</label>
                        </div>
                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                    <p className="signup-prompt">
                        Already have an account? <Link to="/login" className="login-link">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup

