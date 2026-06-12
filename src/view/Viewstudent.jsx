import Searchbtn from "../Dashboard/Searchbtn";
import Tables from "../Dashboard/Table";
import App from "../App";
import "./Viewstudents.css";
function Viewstudent(){
    return(
       <div className="viewouter ">
         <App/>
         <p></p>
         <Searchbtn/>
        
       <div className="tabledesign">
        <Tables />
      </div>
       </div>
    )
}
export default Viewstudent;