import Loading from "@/components/Loading";
import useAdmin from "@/Hooks/useAdmin";
import useAuth from "@/Hooks/useAuth";
import { Navigate } from "react-router-dom";



const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin()
   
    if(loading || isAdminLoading){
        return  <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to="/" ></Navigate>
}

export default AdminRoute