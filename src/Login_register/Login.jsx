import { BsMortarboardFill } from "react-icons/bs";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function loginfetch (e) {
    e.preventDefault();
    try{
    const responselogin = await axios.post("https://student-management-system-backend-1-0k5g.onrender.com/api/login", {
      username: username,
      password: password
    });
    if(responselogin.data.toLowerCase().includes("success")){
      console.log("before")
       navigate("/dashboard");
      console.log("after")
    }else{
      alert(responselogin.data);
    }
  } catch(error){
   alert("Login failed. Please check your credentials and try again.");
  }}
     
     
  return (
    <div className="loginouter">
      <div className="logininner">
        <div>
          <BsMortarboardFill className="hat" size={55} />
        </div>
        <div>
          <h1>ABC Engineering College (Autonomous)</h1>
        </div>
      </div>

      <div className="formdiv">
        <form onSubmit={ loginfetch}>
          <label>UserName : </label>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button className="loginbtn" type="submit">
              Login
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
export default Loginpage;
