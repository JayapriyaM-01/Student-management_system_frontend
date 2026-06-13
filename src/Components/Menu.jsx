import "./Navcss.css";
import { BsMortarboardFill, BsTextIndentLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Menulist({sidebaropen, setSidebarOpen}) {
  if (!sidebaropen) return null;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  function handlelogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  return (
    <div>
      <div className="menulistbar">
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <BsMortarboardFill className="hat" size={55}  />
          <p
           className="collegename"
          >
            {" "}
            ABC Engineering College{" "}
          </p>
        </div>
        <div className="menulist">
          <NavLink to={"/Dashboard"} className="dash">Dashboard</NavLink> <br />
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            style={{position:"relative", display:"inline-block"}}
          >
            <span>Students</span>
            {dropdownOpen && (
              <div className="dropdown">
                <Link to={"/viewstudents"} > → View </Link>
                <br />
                <Link to={"/Add"}> → Add </Link>
              </div>
            )}
          </div>
          <br />
          <span onClick={handlelogout} style={{cursor:"pointer"}}>Logout</span>
        </div>
      </div>
    </div>
  );
}
export default Menulist;
