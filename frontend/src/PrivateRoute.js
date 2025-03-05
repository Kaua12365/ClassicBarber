import { Route, Redirect } from "react-router-dom";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./auth.js";

const PrivateRoute = () => {
    return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;