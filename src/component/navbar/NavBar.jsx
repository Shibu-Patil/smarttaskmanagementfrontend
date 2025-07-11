import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegWindowClose } from "react-icons/fa";
import { contextApi } from '../context/Context';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { globalState, setGlobalState } = useContext(contextApi);
    const navigate = useNavigate();

    const handleShow = () => setShow(!show);
    const handleLogoutClick = () => setShowModal(true);
    const handleCancel = () => setShowModal(false);

    const confirmLogout = () => {
        setGlobalState({
        isLoading:false,
        isLogged:false,
        loggedUserName:"",
        LoggedUserRole:"",
        LoggedUserID:"",
        token:null
        });
        navigate("/");
    };

    return (
        <>
        <div className={`w-full h-[80px] bg-black text-amber-50 flex justify-around items-center text-xl max-sm:justify-start max-sm:px-8 ${show ? 'h-[250px] flex flex-col justify-around gap-2.5 items-start py-2.5' : ''} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center`}>
            <div className='hidden max-sm:flex'>
                {show ? <FaRegWindowClose onClick={handleShow} /> : <TfiMenuAlt onClick={handleShow} />}
            </div>

            {globalState.LoggedUserRole === "admin" && (
                <NavLink to="/home" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""} end>Home</NavLink>
            )}

            {globalState.LoggedUserRole === "admin" ? (
                <NavLink to="addUser" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""}>Add User</NavLink>
            ) : (
                <NavLink to="addTask" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""}>Add Task</NavLink>
            )}

            {globalState.LoggedUserRole === "admin" ? (
                <NavLink to="allTask" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""}>All Task</NavLink>
            ) : (
                <NavLink to="userTask" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""}>Task</NavLink>
            )}

            {globalState.LoggedUserRole === "admin" && (
                <NavLink to="allUser" className={({ isActive }) => isActive ? "bg-amber-50 text-black p-2 rounded-sm" : ""}>All Users</NavLink>
            )}

            <button
                onClick={handleLogoutClick}
                className="text-red-400 border border-red-400 px-3 py-1 rounded hover:bg-red-400 hover:text-white transition-all"
            >
                Logout
            </button>
        </div>

        {showModal && (
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-md shadow-lg text-center space-y-4">
                    <p className="text-xl font-semibold">Are you sure you want to logout?</p>
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={confirmLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Yes, Logout
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default NavBar;
