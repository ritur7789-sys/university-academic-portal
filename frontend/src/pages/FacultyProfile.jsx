import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FacultyProfile(){

const {id}=useParams();

const [faculty,setFaculty]=useState({});

useEffect(()=>{

axios.get(`http://localhost:8080/api/faculty/${id}`)
.then((res)=>{

setFaculty(res.data);

});

},[]);

return(

<div className="container mt-4">

<div className="card shadow">

<div className="card-header bg-primary text-white">

<h3>Faculty Profile</h3>

</div>

<div className="card-body">

<div className="row">

<div className="col-md-6">

<label>Name</label>

<input
className="form-control"
value={faculty.name || ""}
readOnly
/>

</div>

<div className="col-md-6">

<label>Employee ID</label>

<input
className="form-control"
value={faculty.employeeId || ""}
readOnly
/>

</div>

<div className="col-md-6 mt-3">

<label>Designation</label>

<input
className="form-control"
value={faculty.designation || ""}
readOnly
/>

</div>

<div className="col-md-6 mt-3">

<label>Department</label>

<input
className="form-control"
value={faculty.department || ""}
readOnly
/>

</div>

<div className="col-md-6 mt-3">

<label>Email</label>

<input
className="form-control"
value={faculty.email || ""}
readOnly
/>

</div>

<div className="col-md-6 mt-3">

<label>Phone</label>

<input
className="form-control"
value={faculty.phone || ""}
readOnly
/>

</div>

</div>

</div>

</div>

</div>

);

}

export default FacultyProfile;