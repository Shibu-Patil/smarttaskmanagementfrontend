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
    }
}


export default services