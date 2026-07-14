import { Outlet } from "react-router-dom";
import "../styles/auth.css";

function AuthLayout() {

    return (
        <div className="auth-container">
            <div className="left-panel">
            </div>

            <div className="right-panel">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;