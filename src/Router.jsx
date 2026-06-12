import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Addstudent from "./Formcomponent/Addstudent";
import Dashboardpage from "./Dashboard/Dashboardpage";
import Viewstudent from "./view/Viewstudent";
import Loginpage from "./Login_register/Login";
import Edit from "./Formcomponent/Editdetails";

 const router = createBrowserRouter([{
  path: "/",
  element: <Loginpage/>

 },{
  path: "/Add",
  element: <Addstudent/>
 },{
   path:"/dashboard",
   element:<Dashboardpage/> 
 },{
  path:"/viewstudents",
  element:<Viewstudent/>
 },{
  path:"/login",
  element:<Loginpage/>
 },{
  path:"/edit/:id",
  element:<Edit/>
 }
])
 export default router;