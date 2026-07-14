import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Faculty from "./pages/Faculty";
import Student from "./pages/Student";
import Subject from "./pages/Subject";
import FacultyProfile from "./pages/FacultyProfile";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Login Register */}

                <Route element={<AuthLayout />}>

                    <Route path="/" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                </Route>

                {/* Dashboard */}

                <Route element={<MainLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/faculty" element={<Faculty />} />

                    <Route path="/student" element={<Student />} />

                    <Route path="/subject" element={<Subject />} />

                    <Route path="/faculty" element={<Faculty />} />

                    <Route path="/faculty/:id" element={<FacultyProfile />} />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}

export default App;