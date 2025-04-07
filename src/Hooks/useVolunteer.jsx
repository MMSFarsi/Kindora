
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"
import { useQuery } from "@tanstack/react-query"

const useVolunteer = () => {
    const {user,loading}=useAuth()
    const axiosSecure=useAxiosSecure()
 const {data:isVolunteer,isPending:isVolunteerLoading}=useQuery({
    queryKey:[user?.email, 'isVolunteer'],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure.get(`/user/volunteer/${user.email}`);
       
      return res.data?.volunteer;
    }
 })
 return[isVolunteer,isVolunteerLoading]
}

export default useVolunteer  