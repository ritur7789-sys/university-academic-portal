import {Outlet} from "react-router-dom";
import "../styles/auth.css";

function AuthLayout(){
      
    return (
        <div className="auth-container">
            <div className="left-panel">
                <div className="overlay">
                    <h1>University Academic Portal</h1>
                    <p>
                        Empowering Education Through Technology
                    </p>
                </div>
            </div>

            <div className="right-panel">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;