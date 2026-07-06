import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../assets/amity_logo.png";

function Sidebar({ sidebarOpen }) {

    return (

        <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>

            <div className="sidebar-logo">

    <img src={logo} alt="logo" />

    {sidebarOpen && (

        <div className="logo-text">

            <h5>University</h5>

            <small>Academic Portal</small>

        </div>

    )}

</div>

            <div className="menu-section">

    <NavLink to="/dashboard" className="sidebar-link">
        <i className="bi bi-speedometer2"></i>
        {sidebarOpen && <span>Dashboard</span>}
    </NavLink>

    <NavLink to="/faculty" className="sidebar-link">
        <i className="bi bi-person-workspace"></i>
        {sidebarOpen && <span>Faculty</span>}
    </NavLink>

    <NavLink to="/student" className="sidebar-link">
        <i className="bi bi-mortarboard"></i>
        {sidebarOpen && <span>Students</span>}
    </NavLink>

    <NavLink to="/subject" className="sidebar-link">
        <i className="bi bi-book"></i>
        {sidebarOpen && <span>Subjects</span>}
    </NavLink>

    <NavLink to="/publications" className="sidebar-link">
        <i className="bi bi-journal-text"></i>
        {sidebarOpen && <span>Publications</span>}
    </NavLink>

    <NavLink to="/ipr" className="sidebar-link">
        <i className="bi bi-award"></i>
        {sidebarOpen && <span>IPR</span>}
    </NavLink>

    <NavLink to="/events" className="sidebar-link">
        <i className="bi bi-calendar-event"></i>
        {sidebarOpen && <span>Events</span>}
    </NavLink>

    {/* <NavLink to="/reports" className="sidebar-link">
        <i className="bi bi-bar-chart"></i>
        {sidebarOpen && <span>Reports</span>}
    </NavLink> */}

    <NavLink to="/" className="sidebar-link logout">
        <i className="bi bi-box-arrow-right"></i>
        {sidebarOpen && <span>Logout</span>}
    </NavLink>

</div>
        </aside>

    );

}

export default Sidebar;