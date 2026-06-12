import "./Dashboard.css";
function Searchbtn(){
    return(
    <div className="studenttitletable">
            <p className="studentstitle">Students</p>
            <div className="search_btn">
               <input type="text" placeholder="Search Students" className="search"/>
            <button className="addstudentbtn">Add Student</button>
            </div>
            </div>
    )
}
export default Searchbtn;