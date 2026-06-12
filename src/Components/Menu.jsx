import "./Navcss.css";
import { BsMortarboardFill, BsTextIndentLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
function Menulist() {
  return (
    <div>
      <div className="menulistbar">
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <BsMortarboardFill className="hat" size={55} color="blue" />
          <p
            style={{
              marginTop: 15,
              lineHeight: "1.5",
              fontSize: 18.9,
              fontWeight: "bold",
            }}
          >
            {" "}
            ABC Engineering College{" "}
          </p>
        </div>
        <div className="menulist">
            <Link to={"/Dashboard"}>Dashboard</Link> <br/>
            <Link to={"/viewstudents"}>View Students</Link><br/>
            <Link to={"/Add"}>Add Students</Link>

        </div>
      </div>
    </div>
  );
}
export default Menulist;
