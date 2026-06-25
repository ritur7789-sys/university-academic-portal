import { Link } from "react-router-dom";

function Login(){
    return (
        <div>
            <h1>Academic Portal Login</h1>
            <input type =  "text" placeholder="Employee Id "></input>
            <br /><br />
            <input type = "password" placeholder="password"></input>
            <br /><br />
            <button>Login</button>
            <br /><br />
            <p>
                Don't have an account? <Link to="/register">Register Here</Link>
            </p>
        </div>
    );
}
export default Login;