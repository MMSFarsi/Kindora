
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../../LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={{from:location}}replace></Navigate>
}

export default PrivateRoute