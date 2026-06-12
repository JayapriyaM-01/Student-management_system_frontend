import "./Form.css";
import App from "../App";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Edit(){
    const navigate = useNavigate();
    const { id } = useParams();
    const[data,setData] = useState({
        name:"",
        department:"",
        email:"",
        phone:""
    });
     function handlechanges(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
    
    useEffect(() => {
        axios.get(`https://student-management-system-backend-1-0k5g.onrender.com/students/${id}`)
          .then(response => {
            setData(response.data);
          });
      }, [id]);
      async function handleEdit(e){
        e.preventDefault();
        try{
            await axios.put(`https://student-management-system-backend-1-0k5g.onrender.com/students/${id}`, data);
            alert("edited");
            navigate("/dashboard");
        }catch(error){
            console.log(error);
        }}
    return(
        <div className="editouter">
           <App/>
            <div className="editinner">
                <form onSubmit={handleEdit}>
                   <label>Name</label>
                    <input type="text" name="name" placeholder=""  value={data.name} onChange={handlechanges}></input>
                    <input type="text" name="department" placeholder="" value={data.department} onChange={handlechanges} ></input>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="" value={data.email} onChange={handlechanges}></input>
                    <label>Phone</label>
                    <input type="number" name="phone" placeholder="" value={data.phone} onChange={handlechanges}></input>
                    <button style={{borderRadius:"10px" , width:"60px", background:"transparent"}} type="submit">EDIT</button>
                </form>
                
            </div>
        </div>
    )
}
export default Edit;