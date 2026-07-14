import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Faculty() {

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

            <h2 className="mb-4">
                Faculty List
            </h2>

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

    <td>{faculty.employeeId}</td>

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