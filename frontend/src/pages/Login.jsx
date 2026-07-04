import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/amity_logo.png";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeId: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                formData
            );

            alert(response.data);

            if (response.data === "Login Successfully") {
                navigate("/dashboard");
            }

        } catch (error) {

            console.log(error);
            alert("Invalid Employee Id or Password");

        }

    };

    return (

        <div className="login-card">

            <div className="logo-container">
    <img
        src={logo}
        alt="Amity University"
        className="login-logo"
    />
</div>

            <h2>Welcome Back</h2>

            <p className="login-subtitle">
                Sign in to continue
            </p>

            <div className="input-group mb-3">
    <span className="input-group-text">
        <i className="bi bi-person"></i>
    </span>

    <input
        type="text"
        className="form-control"
        placeholder="Employee ID"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
    />
</div>

           <div className="input-group mb-3">
    <span className="input-group-text">
        <i className="bi bi-lock"></i>
    </span>

    <input
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
    />
</div>

<div className="text-end mb-3">
    <a href="#" className="text-decoration-none">
        Forgot Password?
    </a>
</div>

            <button
    className="btn btn-primary btn-login"
    onClick={handleLogin}
>
    Login
</button>

            <p className="register-link">

                Don't have an account?

                <Link to="/register">
                    Register
                </Link>

            </p>

        </div>

    );

}

export default Login;