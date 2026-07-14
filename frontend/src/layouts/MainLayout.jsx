import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import "../styles/layout.css";

function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (

        <>

            <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="layout-body">

                <Sidebar
                    sidebarOpen={sidebarOpen}
                />

                <main className="main-content">

                    <div className="page-content">

                        <Outlet />

                    </div>

                    <Footer/>

                </main>

            </div>

        </>

    );

}

export default MainLayout;