import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(){

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
            [e.target.name] : e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                formData
            );

            alert(response.data);
        } catch (error){
            console.error(error);
            alert("Registration failed");

        }
    };

    return (

        <div>
           <p>Register</p>
           <input type="text" name="employeeId" placeholder="Employee Id" onChange={handleChange}></input>
           <br /><br />
           <input type="text" name= "name" placeholder="Name" onChange={handleChange}></input>
           <br /><br />
           <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
           <br /><br />
           <input type="password" name= "password" placeholder="password" onChange={handleChange}></input>
           <br /><br />
           <input type="password" name= "repeatPassword" placeholder="repeatPassword" onChange={handleChange}></input>
           <br /><br />
           <input type="text" name="department" placeholder="Department" onChange={handleChange}></input>
           <br /><br />
           <input type="text" name="university" placeholder="University" onChange={handleChange}></input>
           <br /><br />
           

           <button onClick={handleRegister}>Register</button>
           <br /><br />

           <p>
               Already have an account? <Link to="/">Login</Link>
           </p>
        </div>
    )
}

export default Register;