import { createBrowserRouter } from "react-router-dom";
import Register from "../register/Register";
import Login from "../login/Login";
import DashBoard from "../dashboard/DashBoard";
import Home from "../dashboard/home/Home";
import AddUser from "../dashboard/addUser/AddUser";
import AllUser from "../dashboard/allUser/AllUser";
import AllTask from "../dashboard/allTask/AllTask";
import AdddTask from "../dashboard/addTask/AdddTask";
import CreatedTasksByUser from "../dashboard/createdTaskByUser/CreatedTasksByUser";
import UpdateTask from "../dashboard/updateTask/UpdateTask";

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
            },{
                path:"addTask",
                element:<AdddTask></AdddTask>
            },{
                path:"userTask",
                element:<CreatedTasksByUser></CreatedTasksByUser>
            },{
                path:"updateTask",
                element:<UpdateTask></UpdateTask>
            }
        ]
    }
])


export default routes