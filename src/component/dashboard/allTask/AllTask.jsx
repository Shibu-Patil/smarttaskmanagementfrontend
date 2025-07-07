import React, { useContext, useEffect, useState } from 'react'
import { contextApi } from '../../context/Context'
import services from '../../services/service'
import toast from 'react-hot-toast'

const AllTask = () => {
  const [createdTask,setCreatedTask]=useState([])
  const {globalState}=useContext(contextApi)
  useEffect(()=>{
    (async()=>{
     try {
       let data=await services.allTask(globalState.token)
      console.log(data)
      if(data.status==200){
      setCreatedTask(data.data) 
        // console.log(users);
      }else{
        toast.error("Something went Wrong")
      }
      
     } catch (error) {
        toast.error("Something went Wrong")
      
     }
    })();   
  },[])

  console.log(createdTask);
  return (
   <div className="w-full px-4 py-8">


      {!createdTask.length ? (
        <p className="text-center text-gray-600">No Tasks Available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {createdTask.map((task, index) => {
            const formattedDate = new Date(task.dueDate).toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all flex flex-col gap-2"
              >
                <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {task.category}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Due Date:</strong> {formattedDate}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Priority:</strong>{' '}
                  <span
                    className={
                      task.priority === 'high'
                        ? 'text-red-600 font-semibold'
                        : task.priority === 'medium'
                        ? 'text-yellow-600 font-semibold'
                        : 'text-green-600 font-semibold'
                    }
                  >
                    {task.priority}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Status:</strong>{' '}
                  <span
                    className={
                      task.status === 'completed'
                        ? 'text-green-700 font-medium'
                        : 'text-orange-600 font-medium'
                    }
                  >
                    {task.status}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default AllTask