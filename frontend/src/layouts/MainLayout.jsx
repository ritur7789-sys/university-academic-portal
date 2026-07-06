import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (

        <>

            <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="main-container">

                <Sidebar sidebarOpen={sidebarOpen} />

                <div
                    className={`content ${sidebarOpen ? "expanded" : "collapsed"}`}
                >

                    <div className="page-content">

                        <Outlet />

                    </div>

                </div>

            </div>

        </>

    );

}

export default MainLayout;