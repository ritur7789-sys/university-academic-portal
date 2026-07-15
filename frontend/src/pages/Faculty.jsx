import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Faculty() {

    const [faculty, setFaculty] = useState({
    empId: "",
    name: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
    photo: ""
});

const handleChange = (e) => {

    setFaculty({
        ...faculty,
        [e.target.name]: e.target.value
    });

};

const saveFaculty = async () => {

    try {

        await axios.post(
            "http://localhost:8080/api/faculty",
            faculty
        );

        alert("Faculty Added Successfully");

        fetchFaculty();

        setFaculty({
            empId: "",
            name: "",
            designation: "",
            department: "",
            email: "",
            phone: "",
            photo: ""
        });

    } catch (error) {

        console.log(error);

    }

};

    const navigate = useNavigate();


    const [facultyList, setFacultyList] = useState([]);

    useEffect(() => {
        fetchFaculty();
    }, []);

    const fetchFaculty = async () => {

        try {

            const response = await axios.get("http://localhost:8080/api/faculty");

            setFacultyList(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

    <h2 className="mb-0">Faculty List</h2>

    <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#facultyModal"
    >
        <i className="bi bi-plus-circle me-2"></i>
        Add Faculty
    </button>

</div>

            <table className="table table-bordered table-hover">

                <thead className="table-primary">

                    <tr>

                        <th>ID</th>

                        <th>Employee ID</th>

                        <th>Name</th>

                        <th>Designation</th>

                        <th>Department</th>

                        <th>Email</th>

                    </tr>

                </thead>

                     <div
    className="modal fade"
    id="facultyModal"
>


           
    <div className="modal-dialog modal-lg">

        <div className="modal-content">

            <div className="modal-header">

                <h4>Add Faculty</h4>

                <button
                    className="btn-close"
                    data-bs-dismiss="modal"
                ></button>

            </div>

            <div className="modal-body">

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Employee ID"
                            name="empId"
                            value={faculty.empId}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Faculty Name"
                            name="name"
                            value={faculty.name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Designation"
                            name="designation"
                            value={faculty.designation}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Department"
                            name="department"
                            value={faculty.department}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={faculty.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="col-md-6 mb-3">

                        <input
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            value={faculty.phone}
                            onChange={handleChange}
                        />

                    </div>

                </div>

            </div>

            <div className="modal-footer">

                <button
                    className="btn btn-success"
                    onClick={saveFaculty}
                    data-bs-dismiss="modal"
                >
                    Save
                </button>

            </div>

        </div>

    </div>

</div>

                <tbody>

{
facultyList.map((faculty)=>(

<tr
    key={faculty.id}
    style={{ cursor: "pointer" }}
    onClick={() => {
        console.log(faculty.id);
        navigate(`/faculty/${faculty.id}`);
    }}
>

    <td>{faculty.id}</td>

    <td>{faculty.empId}</td>

    <td>{faculty.name}</td>

    <td>{faculty.designation}</td>

    <td>{faculty.department}</td>

    <td>{faculty.email}</td>

</tr>

))
}

</tbody>

            </table>

        </div>

    );
}

export default Faculty;