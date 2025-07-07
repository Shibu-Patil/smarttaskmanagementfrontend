import React, { useContext } from 'react'
import { contextApi } from '../context/Context'
import NavBar from '../navbar/NavBar';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    const {globalState,setGlobalState}=useContext(contextApi)
    console.log(globalState);
    
  return (
  <>
    <NavBar></NavBar>
    <Outlet></Outlet>
  </>
  )
}

export default DashBoard