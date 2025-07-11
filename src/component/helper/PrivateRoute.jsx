import React, { useContext } from 'react';
import { contextApi } from '../context/Context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { globalState } = useContext(contextApi);

  if (!globalState.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
