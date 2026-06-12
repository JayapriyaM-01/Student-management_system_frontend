import "./Form.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsMortarboardFill } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Addstudentform() {
  const navigate = useNavigate();
  const [studentdata, setstudentdata] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
  });
  function handlechanges(e) {
    setstudentdata({
      ...studentdata,
      [e.target.name]: e.target.value,
    });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://student-management-system-backend-1-0k5g.onrender.com/students/add", studentdata);
      alert("added");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="form">
      <BsMortarboardFill size={70} />
      <p className="heading">STUDENT REGISTRATION FORM</p>

      <form id="form2" onSubmit={handlesubmit}>
        <div className="formvalues1">
          <div>
            <label style={{ marginRight: 10 }}>Name </label>
            <input
              type="text"
              name="name"
              placeholder=""
              onChange={handlechanges}
            ></input>
          </div>
          <div>
            <label style={{ marginRight: 10 }}>Department </label>
            <input
              type="text"
              name="department"
              placeholder=""
              onChange={handlechanges}
            ></input>
          </div>
          <div>
            <label style={{ marginRight: 10 }}>Email </label>
            <input
              type="email"
              name="email"
              placeholder=""
              onChange={handlechanges}
            ></input>
          </div>
          <div>
            <label style={{ marginRight: 10 }}>Phone No </label>
            <input
              type="number"
              name="phone"
              placeholder=""
              onChange={handlechanges}
            ></input>
          </div>
          <button className="stuaddbtn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addstudentform;
