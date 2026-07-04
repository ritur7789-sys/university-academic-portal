import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout(){

    return(

        <>

            <Navbar/>

            <div className="main-container">

                <Sidebar/>

                <div className="content">

                    <div className="page-content">

                        <Outlet />

                    </div>

                </div>

            </div>

        </>

    );

}

export default MainLayout;