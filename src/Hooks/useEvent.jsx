import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


const useEvent = () => {
    const axiosPublic=useAxiosPublic()

    const {data:events=[],isPending:loading,refetch}= useQuery({
        queryKey:['events'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/events')
            return res.data
        }
    })
        return [events,refetch,loading]

  
}

export default useEvent