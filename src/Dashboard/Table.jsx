import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Tables() {
  let rows = ["Id", "Name", "Department", "Email", "Phone", "Actions"];
  const [table, setTable] = useState([]);
  async function getData() {
    const token=localStorage.getItem("token");
    const response = await axios.get("https://student-management-system-backend-1-0k5g.onrender.com/students",
      {headers: {Authorization: `Bearer ${token}`}
    }
    );
    const arrdata = response.data;
    setTable(arrdata);
  }
  async function handleDel(id) {
    const token=localStorage.getItem("token");
    try {
      await axios.delete(`https://student-management-system-backend-1-0k5g.onrender.com/students/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      });
      setTable(table.filter(student => student.id !== id));
      alert("deleted");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <table className="tabledesign">
        <thead>
          <tr>
            {rows.map((e) => (
              <th>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((e, id) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>
             <button className="addbtn">
              <Link  style={{ textDecoration:"none",color:"black"}} to={`/edit/${e.id}`}>Edit</Link>
              </button>
              <button className="delbtn" onClick={()=> handleDel(e.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tables;
