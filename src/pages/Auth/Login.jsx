
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Shared/SocialLogin";


const Login = () => {
  const navigate = useNavigate();
  const { signInUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Login Successful");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message || "Failed to login ";
        toast.error(errorMessage);
      });
  };



  return (
   <>
 
   
   <div className="min-h-screen flex items-center justify-center">
      <div className="card w-[300px] lg:w-[400px]  p-6 border-[#676767] border bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center text-gray-600 mb-6">
  Donate With <span className='text-green-600'>Kindora</span>
</h2>

        <form onSubmit={handleLogin}  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border border-[#676767] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <label className='lavbel'>
                <a href="#" className='label-text-alt link link-hover'>
                    Forgot Password
                </a>
            </label>
          </div>
       
          <div>
            <button  className="w-full py-2 px-4 bg-[#484848] text-white font-semibold rounded-lg transition">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-[#000000]">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
       <SocialLogin></SocialLogin>
      </div>
    </div></>
  );
};

export default Login;
