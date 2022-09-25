import React from "react"
import {useLocation, Navigate} from "react-router-dom"

//Implementasi Component Navigate
function ProtectedRoute({children}){
    let location = useLocation()

    if(!localStorage.getItem("token")){
        return <Navigate to="/login" state={{from : location}} />
    }

    return children
}

export default ProtectedRoute
