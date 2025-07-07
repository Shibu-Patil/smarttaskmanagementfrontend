import React, { createContext, useState } from 'react'
export let contextApi=createContext()
let {Provider}=contextApi
const Context = ({children}) => {
    const [globalState,setGlobalState]=useState({
        isLoading:false,
        isLogged:false,
        loggedUserName:"",
        LoggedUserRole:"",
        LoggedUserID:"",
        token:null
    })
  return (
   <Provider value={{globalState,setGlobalState}}>{children}</Provider>
  )
}

export default Context