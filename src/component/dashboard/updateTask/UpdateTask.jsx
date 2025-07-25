import React, { useContext, useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CgRename } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";
import {validatePassword} from "val-pass"
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import services from '../../services/service';
import { contextApi } from '../../context/Context';

const UpdateTask = () => {
      const navigate=useNavigate()
          const {state}=useLocation()
          console.log(state);
          
  const [formData,setFormData]=useState({
    title:state.title,
    category:state.category,
    dueDate:state.dueDate.split("T")[0],
    priority:state.priority,
    status:state.status
  })
const {globalState}=useContext(contextApi)


  const handelChange=e=>{
    let {name,value}=e.target
    setFormData((preVal)=>({...preVal,[name]:value}))
  }

  const handelSubmit=e=>{
    e.preventDefault()
    // console.log(formData);
    
    let {title,category,dueDate,priority,status}=formData
    if(!title||!category||!dueDate||!priority||!status){
      toast.error("All feilds are mandatory")
      return
    }

    console.log(formData);
    
(async()=>{
let data=await services.updateTask(formData,globalState.token,state._id)
try {
  if(data.status==200){
  toast.success("Task Updated successfully")
  navigate("/home")
}else if(data.status==403){
toast.error(data.response.data.message)
}else{
  toast.error("Something went wrong")
}
} catch (error) {
  toast.error("Something went wrong")
}
})()
   
  }
  let {title,priority,dueDate,status,category}=formData
  return (
   <div className='bg-[#efefef] size-full flex justify-center items-center'>
               <form action="" className='w-1/2 h-[75%]  rounded-3xl bg-white shadow-2xl flex  items-center flex-col gap-8 px-[80px] mt-[-20px] py-20 max-lg:w-[90%] overflow-scroll' onSubmit={handelSubmit}>
                 <div className='font-bold w-full flex justify-center items-center'>
                   <h1 className='text-3xl max-lg:text-sm'>Update Task</h1>
                 </div>
         
                 <div className='border-2  w-full flex justify-center items-center px-3 pr-8 rounded-sm'>
                   <input type="text" name="title" placeholder='Enter Title' className='w-full outline-none px-4 h-10'  onChange={handelChange} value={title}/>
                   <span><CgNametag /></span>
                 </div>
         
          
         
         
                 <div className='border-2  w-full flex justify-center items-center px-3 pr-8 rounded-sm'>
                   <input type="text" name="category" placeholder='Enter Category' className='w-full outline-none px-4 h-10' onChange={handelChange} value={category}/>
                     <span><MdAlternateEmail /></span>
                 </div>
         
               
         
                 <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm'>
                   <input type="date" name="dueDate" className='w-full outline-none px-4 h-10' onChange={handelChange} value={dueDate}/>
                    
                 </div>
   
         
                 <div className='  w-full flex justify-evenly items-center px-3 rounded-sm'>
                   <div className='justify-self-start w-1/3'>Priority - </div>
                   <div className='grow flex justify-start max-lg:flex-col' >
                   <div className='grow'><input type="radio" name='priority' value="low" checked={priority=="low"} onChange={handelChange}/> <span>Low</span></div>
                  <div className='grow'> <input type="radio" name='priority' value="medium" checked={priority=="medium"} onChange={handelChange}/> <span>Medium</span></div>
                  <div className='grow'> <input type="radio" name='priority' value="high" checked={priority=="high"} onChange={handelChange}/> <span>High</span></div>
                   </div>
                 </div>
   
   
         
                 <div className='  w-full flex justify-evenly items-center px-3 rounded-sm'>
                   <div className='justify-self-start w-1/3'>Status - </div>
                   <div className='grow flex justify-start max-lg:flex-col' >
                  <div className='grow'><input type="radio" name='status' value="pending" checked={status=="pending"}onChange={handelChange}/> <span>Pending</span></div>
                  <div className='grow'> <input type="radio" name='status' value="in-progress" checked={status=="in-progress"}onChange={handelChange}/> <span>In-Progress</span></div>
                  <div className='grow'> <input type="radio" name='status' value="completed" checked={status=="completed"}onChange={handelChange}/> <span>Completed</span></div>
                   </div>
                 </div>
                 
   
         
                 
                 <div className='border-2  w-full flex justify-center items-center px-3 rounded-sm bg-black hover:bg-[#555] active:bg-lime-500 active:scale-[0.9]'>
                  <button className='h-10 text-white font-bold text-md tracking-widest w-full outline-0'>Click</button>
                 </div>
               </form>
             </div>
  )
}

export default UpdateTask