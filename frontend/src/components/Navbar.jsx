import logo from "../assets/amity_logo.png";
import "../styles/navbar.css";

function Navbar({ sidebarOpen, setSidebarOpen }) {

    return (

        <header className="top-navbar">

            <div className="nav-left">

                <i
  className="bi bi-list menu-btn"
  onClick={() => setSidebarOpen(!sidebarOpen)}
></i>

                <img
                    src={logo}
                    alt="Logo"
                    className="nav-logo"
                />

                <div className="nav-title">

                    <h4>University Academic Portal</h4>

                    <p>Amity University</p>

                </div>

            </div>

            <div className="nav-center">

                <div className="search-box">

                    <i className="bi bi-search"></i>

                    <input
                        type="text"
                        placeholder="Search Faculty, Student, Subject..."
                    />

                </div>

            </div>

            <div className="nav-right">

                <div className="notification">
    <i className="bi bi-bell nav-icon"></i>
    <span className="notification-dot"></span>
</div>

                <div className="profile">

                    <img
                        src="https://ui-avatars.com/api/?name=Admin"
                        alt="profile"
                    />

                    <div className="profile-info">

                        <h6>Admin</h6>

                        <span>Administrator</span>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;