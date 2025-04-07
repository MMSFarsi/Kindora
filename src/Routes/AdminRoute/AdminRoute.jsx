
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../../LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";



const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading]=useAdmin()
   
    if(loading || isAdminLoading){
        return  <LoadingSpinner></LoadingSpinner>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to="/" ></Navigate>
}

export default AdminRoute