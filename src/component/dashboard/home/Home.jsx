import React, { useContext, useEffect, useState } from 'react'
import TaskStatsChart from './TaskStatsChart';
import services from '../../services/service';
import { contextApi } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [stats,setStats]=useState(null)
  const {globalState}=useContext(contextApi)
  console.log(globalState);
  const navigate=useNavigate()
  if(globalState.LoggedUserRole=="user"){
    if(globalState.LoggedUserRole=="user" && globalState.token){
    navigate("userTask")

    }else{
      navigate("/")
    }

  }
  useEffect(()=>{
(async()=>{
  let data =await services.generateRepo(globalState.token)
  console.log(data);
  
  setStats(data.data)
})()
  },[])
  console.log(stats);
  
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TaskStatsChart stats={stats} />
    </div>
  );
}

export default Home