import React, { useContext, useEffect, useState } from 'react'
import services from '../../services/service';
import { contextApi } from '../../context/Context';
import toast from 'react-hot-toast';

const AllUser = () => {
  const [users,setAllUsers]=useState([])
  const {globalState}=useContext(contextApi)
  // console.log(globalState.LoggedUserID);
  
  useEffect(()=>{
    (async()=>{
     try {
       let data=await services.allUsers(globalState.token)
      // console.log(data)
      if(data.status==200){
      setAllUsers(data.data.filter((user)=>user.role=="user")) 
        // console.log(users);
      }else{
        toast("Something went Wrong")
      }
      
     } catch (error) {
        toast("Something went Wrong")
      
     }
    })();
  },[])

  console.log(users);
  
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">All Users</h2>
      {!users.length ? (
        <p className="text-center text-gray-600">No Users Present</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((val) => (
            <div key={val._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all flex flex-col gap-2 ">
              <h3 className="text-xl font-semibold mb-2">{val.name}</h3>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Email:</strong> {val.email}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Role:</strong> {val.role}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Status:</strong>{" "}
                <span className={val.isActive ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                  {val.isActive ? "Active" : "Inactive"}
                </span>

              </p>
                   <div className={`w-full h-6 rounded-sm ${val.isActive? "bg-red-600":"bg-green-600"}`}>
                  {
                    val.isActive?<button className='size-full'>Deactivate</button>:<button className='size-full'>Reactivate</button>
                  }
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AllUser