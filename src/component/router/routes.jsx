import { createBrowserRouter } from "react-router-dom";
import Register from "../register/Register";
import Login from "../login/Login";
import DashBoard from "../dashboard/DashBoard";
import Home from "../dashboard/home/Home";
import AddUser from "../dashboard/addUser/AddUser";
import AllUser from "../dashboard/allUser/AllUser";
import AllTask from "../dashboard/allTask/AllTask";

const routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<DashBoard></DashBoard>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"addUser",
                element:<AddUser></AddUser>
            },{
                path:"alluser",
                element:<AllUser></AllUser>
            },{
                path:"allTask",
                element:<AllTask></AllTask>
            }
        ]
    }
])


export default routes