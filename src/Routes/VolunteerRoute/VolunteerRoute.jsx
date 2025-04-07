import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import LoadingSpinner from "../../../LoadingSpinner";
import { Navigate } from "react-router-dom";
import useVolunteer from "../../Hooks/useVolunteer";




const VolunteerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isVolunteer,isVolunteerLoading]=useVolunteer()
   
    if(loading || isVolunteerLoading){
        return  <LoadingSpinner></LoadingSpinner>
    }
    if(user && isVolunteer){
        return children
    }
  return <Navigate to="/" ></Navigate>
}

export default VolunteerRoute