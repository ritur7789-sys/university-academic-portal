import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FacultyProfile() {

    const { id } = useParams();

    const [faculty, setFaculty] = useState({});
    const [activeTab, setActiveTab] = useState("profile");

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/faculty/${id}`)
            .then((res) => {
                setFaculty(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white text-center">
                    <h3 className="mb-0">Faculty Profile</h3>
                </div>

                <div className="card-body">

                    {/* Tabs */}

                    <ul className="nav nav-tabs mb-4">

                        <li className="nav-item">

                            <button
                                className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                                onClick={() => setActiveTab("profile")}
                            >
                                Profile
                            </button>

                        </li>

                        <li className="nav-item">

                            <button
                                className={`nav-link ${activeTab === "publication" ? "active" : ""}`}
                                onClick={() => setActiveTab("publication")}
                            >
                                Publications
                            </button>

                        </li>

                        <li className="nav-item">

                            <button
                                className={`nav-link ${activeTab === "ipr" ? "active" : ""}`}
                                onClick={() => setActiveTab("ipr")}
                            >
                                IPR
                            </button>

                        </li>

                    </ul>

                    {/* PROFILE */}

                    {activeTab === "profile" && (

<div className="card shadow-sm border-0">

<div className="card-body">

<div className="row">

{/* Left */}

<div className="col-md-4 text-center border-end">

<img
src={
faculty.photo
? faculty.photo
: "https://ui-avatars.com/api/?name=" + encodeURIComponent(faculty.name || "Faculty")
}
alt="faculty"
className="rounded-circle border"
style={{
width:"170px",
height:"170px",
objectFit:"cover"
}}
/>

<h3 className="mt-3 mb-1">
{faculty.name}
</h3>

<p className="text-muted">
{faculty.designation}
</p>

<span className="badge bg-success px-3 py-2">
Active
</span>

</div>

{/* Right */}

<div className="col-md-8">

<h4 className="mb-4">
Faculty Details
</h4>

<div className="row">

<div className="col-md-6 mb-4">

<label className="text-muted">
Employee ID
</label>

<h6>
{faculty.empId}
</h6>

</div>

<div className="col-md-6 mb-4">

<label className="text-muted">
Department
</label>

<h6>
{faculty.department}
</h6>

</div>

<div className="col-md-6 mb-4">

<label className="text-muted">
Email
</label>

<h6>
{faculty.email}
</h6>

</div>

<div className="col-md-6 mb-4">

<label className="text-muted">
Phone
</label>

<h6>
{faculty.phone}
</h6>

</div>

<div className="col-md-6">

<label className="text-muted">
Designation
</label>

<h6>
{faculty.designation}
</h6>

</div>

</div>

</div>

</div>

</div>

</div>

)}

                    

                    {/* PUBLICATION */}

                    {activeTab === "publication" && (

                        <div>

                            <div className="d-flex justify-content-between mb-3">

                                <h5>Publications</h5>

                                <button className="btn btn-primary">
                                    + Add Publication
                                </button>

                            </div>

                            <table className="table table-bordered">

                                <thead className="table-light">

                                    <tr>

                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Journal</th>
                                        <th>Year</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td colSpan="4" className="text-center">
                                            No Publications Found
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    )}

                    {/* IPR */}

                    {activeTab === "ipr" && (

                        <div>

                            <div className="d-flex justify-content-between mb-3">

                                <h5>IPR</h5>

                                <button className="btn btn-success">
                                    + Add IPR
                                </button>

                            </div>

                            <table className="table table-bordered">

                                <thead className="table-light">

                                    <tr>

                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Status</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td colSpan="4" className="text-center">
                                            No IPR Found
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default FacultyProfile;