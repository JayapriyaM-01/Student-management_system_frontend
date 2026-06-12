import { useRef, useState } from "react";
import "./Navcss.css";
import ProfileUpload from "./Profile";
import { FaBars } from "react-icons/fa";

function NavBar() {
    const [ismobile, setismobile]= useState(false);
  return (
    <nav>
      <div id="nav">
        <div id="menunav">
          <button className="menuicon" onClick={()=> setismobile(!ismobile) }>
           {ismobile ? <h2>X</h2> : <FaBars size={25}/>}
           
          </button>
        </div>
        <div id="profilemenu">
          <button className="Profileicon"></button>
          <select className="drop">
            <option>
              
            </option>
            <option>Profile</option>
            <option>Settings</option>
            <option>Logout</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
