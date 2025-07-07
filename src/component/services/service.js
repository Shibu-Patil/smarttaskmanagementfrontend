import axiosInstance from "../AxiosInstance/Instance";

const services={
    regiUser:async(payload)=>{
        try {
        let data=await axiosInstance.post("auth/register-admin",payload)
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
        loginUser:async(payload)=>{
        try {
        let data=await axiosInstance.post("auth/login",payload)
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
    addUser:async(payload,token)=>{
        try {
        let data=await axiosInstance.post("/admin/add-user",payload,{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
    allUsers:async(token)=>{
try {
        let data=await axiosInstance.get("/admin/users",{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },

        addTask:async(payload,token)=>{
        try {
        let data=await axiosInstance.post("/tasks",payload,{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },

        taskByUser:async(token)=>{
try {
        let data=await axiosInstance.get("/tasks",{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
            allTask:async(token)=>{
try {
        let data=await axiosInstance.get("/admin/tasks",{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },updateTask:async(payload,token,id)=>{
        try {
        let data=await axiosInstance.patch(`/tasks/${id}`,payload,{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
    deleteTask:async(token,id)=>{
        try {
        let data=await axiosInstance.delete(`/tasks/${id}`,{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    }, deActivateUser:async(token,id)=>{
        console.log(token,id);
        
        try {
        let data=await axiosInstance.patch(`/admin/deactivate-user/${id}`,{},{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },reActivateUser:async(token,id)=>{
        try {
        let data=await axiosInstance.patch(`/admin/activate-user/${id}`,{},{
            headers:{
                 "Authorization": `Bearer ${token}`
            }
        })
    //   console.log(data);
    return data
        } catch (error) {
            console.log(error);
            return error
        }
    },
}


export default services