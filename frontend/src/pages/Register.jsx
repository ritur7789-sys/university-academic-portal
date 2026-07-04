import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/amity_logo.png";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeId: "",
        name: "",
        password: "",
        repeatPassword: "",
        department: "",
        university: "",
        role: "FACULTY"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {

        if (formData.password !== formData.repeatPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                formData
            );

            alert(response.data);

            navigate("/");

        } catch (error) {

            console.error(error);
            alert("Registration Failed");

        }

    };

    return (

        <div className="auth-card">

            <div className="logo-container">

                <img
                    src={logo}
                    alt="Amity University"
                    className="login-logo"
                />

                <div className="logo-title">
                    AMITY UNIVERSITY
                </div>

            </div>

            <h2>Create Account</h2>

            <p className="login-subtitle">
                Register to continue
            </p>

            {/* Employee ID */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-person-badge"></i>
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

            {/* Name */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-person"></i>
                </span>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

            </div>

            {/* Department */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-building"></i>
                </span>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                />

            </div>

            {/* University */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-bank"></i>
                </span>

                <input
                    type="text"
                    className="form-control"
                    placeholder="University"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                />

            </div>

            {/* Role */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-person-workspace"></i>
                </span>

                <select
                    className="form-select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                    <option value="STUDENT">Student</option>
                </select>

            </div>

            {/* Password */}

            <div className="input-group">

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

            {/* Confirm Password */}

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-shield-lock"></i>
                </span>

                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />

            </div>

            <button
                className="btn btn-primary btn-login"
                onClick={handleRegister}
            >
                Create Account
            </button>

            <p className="register-link">

                Already have an account?

                <Link to="/">
                    Login
                </Link>

            </p>

        </div>

    );

}

export default Register;