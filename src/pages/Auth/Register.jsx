
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { AuthContext } from '../../provider/AuthProvider'
import SocialLogin from '../../Shared/SocialLogin'

const Register = () => {
  const axiosPublic=useAxiosPublic()
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate=useNavigate()
  const onSubmit = (data) => {
  
    createUser(data.email, data.password)
    .then(result=>{
   
      updateUserProfile(data.name, data.photo)
      .then(()=>{
        // save to db
        const userInfo={
          name:data.name,
          email: data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
     
          if(res.data.insertedId){
            toast.success('Registration Successfull')
          }
          navigate('/')
        })
      })
    })
    
  }
  return (
    <div className="py-10 min-h-screen flex items-center justify-center">
    <div className="card w-[300px] lg:w-[400px]  p-6 border-[#676767] border bg-white dark:bg-gray-100 shadow-xl rounded-lg">
    <h2 className="text-xl font-bold text-center text-gray-600 mb-6">
  Create an indentity in <span className='text-green-600'>Kindora</span>
</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}

            placeholder="Your Name"
            className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"

          />
          {errors.name && <span>Your Name is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Photo URL</label>
          <input
            type="url"
            name="photo"
            {...register("photo",{ required: true })}
            placeholder="Photo URL"
            className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
             {errors.photo && <span>Image required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            {...register("email",{ required: true })}
            placeholder="Email"
            className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
           {errors.email && <span>Enter Your Email Properly</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
            })}
            placeholder="Password"
            className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"

          />
          {errors.password && <span>Password must be at least 6 characters long, include uppercase, lowercase, a number, and a special character</span>}
        </div>
        <div>
          <button className="w-full py-2 px-4 bg-[#484848] text-white font-semibold rounded-lg transition">
            Register
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm text-[#000000]">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  </div>

 


   
  )
}

export default Register