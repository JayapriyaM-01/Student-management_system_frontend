import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Tables() {
  let rows = [ "Name", "Department", "Email", "Phone", "Actions"];
  const [table, setTable] = useState([]);
  const [currentpage, setcurrentpage]=useState(1);
  const studentsperpage=10;
  async function getData() {
    const token=localStorage.getItem("token");
    const response = await axios.get("https://student-management-system-backend-1-0k5g.onrender.com/students",
      {headers: {Authorization: `Bearer ${token}`}
    }
    );
    setTable(response.data) ;
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
  const lastIndex = currentpage * studentsperpage;
  const firstIndex=lastIndex-studentsperpage;
  const currentstudents = table.slice(firstIndex / studentsperpage);
  const totalpages = Math.ceil(table.length/studentsperpage);
  return (
    <div>
      <table className="tabledesign">
        <thead>
          <tr>
            {rows.map((e) => (
              <th className="tablename">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentstudents.map((e, id) => (
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
      <div className="pagination">
        <button onClick={()=> setcurrentpage(currentpage-1)}disabled={currentpage===1}> ◂ prev</button>
        {Array.from({length: totalpages}, (_, i) =>(
          <button key={i}
          onClick={()=>setcurrentpage(i+1)}
          className={currentpage===i+1 ? "activepage" : ""}>
            {i+1}

          </button>
        ))}
        <button onClick={()=>setcurrentpage(currentpage +1)}
          disabled={currentpage===totalpages}>Next ▸</button>
      </div>
    </div>
  );
}
export default Tables;
