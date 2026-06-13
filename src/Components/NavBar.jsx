import { useRef, useState } from "react";
import "./Navcss.css";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Menulist from "./Menu";
import { WiSnow } from "react-icons/wi";

function NavBar() {
    const [sidebaropen, setsidebaropen]= useState(window.innerWidth > 750);
    const [profileopen, setprofileopen]= useState(false);
    const username = localStorage.getItem("user") || "Admin";
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1200) {
          setsidebaropen(true);
        } else {
          setsidebaropen(false);
        }
      };
      window.addEventListener("resize", handleResize);
    }, []);
  return (
    <nav>
      <div id="nav">
        <Menulist sidebaropen={sidebaropen} 
        setSidebarOpen={setsidebaropen}/>
        <div id="menunav">
          <button className="menuicon" onClick={()=> {if(window.innerWidth <= 750){
            setsidebaropen(!sidebaropen) }}}>
           {sidebaropen ?  <FaBars size={25} />: <FaBars size={25}/>}
           
          </button>
        </div>
        <div className="profilemenu">
          <button className="Profileicon" onClick={()=> setprofileopen(!profileopen)}>
            {username.charAt(0).toUpperCase()}
          </button>
         
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
