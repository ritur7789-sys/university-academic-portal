import { Link } from "react-router-dom";

function Sidebar(){

    return(

        <div className="sidebar bg-white border-end">

            <h4 className="text-center mt-4">

                Menu

            </h4>

            <hr/>

            <div className="list-group list-group-flush">

                <Link
                    className="list-group-item list-group-item-action"
                    to="/dashboard"
                >
                    <i className="bi bi-speedometer2"></i>

                    {" "}Dashboard
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/faculty"
                >
                    <i className="bi bi-person-workspace"></i>

                    {" "}Faculty
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/student"
                >
                    <i className="bi bi-mortarboard"></i>

                    {" "}Students
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/subject"
                >
                    <i className="bi bi-book"></i>

                    {" "}Subjects
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/publications"
                >
                    <i className="bi bi-journal-text"></i>

                    {" "}Publications
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/ipr"
                >
                    <i className="bi bi-award"></i>

                    {" "}IPR
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/events"
                >
                    <i className="bi bi-calendar-event"></i>

                    {" "}Events
                </Link>

                <Link
                    className="list-group-item list-group-item-action"
                    to="/logout"
                >
                    <i className="bi bi-box-arrow-right"></i>

                    {" "}Logout
                </Link>

            </div>

        </div>

    );

}

export default Sidebar;