import "./Dashboard.css";
import Tables from "./Table";
import Searchbtn from "./Searchbtn";
function Studenttable() {
  return (
    <div className="tableouter">
      <div className="dashtitle">
        <p>Dashboard</p>
      </div>
        < Searchbtn/>
      <div className="tabledesign">
        <Tables />
      </div>
    </div>
  );
}
export default Studenttable;
