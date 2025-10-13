import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../redux/api/users";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  const submitHandler= async (e)=>{
    e.preventDefault();

    try {
      const res= await login({email, password}).unwrap();
      dispatch(setCredentials({...res}));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <section className="pl-[10rem] flex flex-wrap items-center justify-center ">
        <div className="mr-[4rem] mt-[5rem] ">
          <h1 className="text-2xl font-semiboldmb-4"> Sign In</h1>
          <form className="container w-[40rem]" onSubmit={submitHandler}>
            {/* Email Field */}
            <div className="my-[2rem]">
              <label htmlFor="email" className="block text-sm font-medium text-white " >Email Address</label>
              <input type="email" id="email" placeholder="Your Email" className="mt-1 p-2 border rounded w-full" value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </div>

            {/* Password Field */}
            <div className="my-[2rem]">
              <label htmlFor="password" className="block text-sm font-medium text-white " >Password</label>
              <input type="password" id="password" placeholder="Your Password" className="mt-1 p-2 border rounded w-full" value={password}  onChange={(e)=>setPassword(e.target.value)} />
            </div>
            {/* Submit */}
             <button
            disabled={isLoading}
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem] "
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
          {isLoading && <Loader/>}
          </form>
<div className="mt-4">
<p className="text-white">New User? {" "} <Link to={redirect ? `/register?redirect=${redirect}`:"/register"} className="text-teal-600 hover:underline">Register</Link> </p>
</div>



        </div>
        {/* Set an Image */}
        <span className="border-2 w-[25rem] h-96 bg-teal-950 flex items-center justify-center"><p className="text-6xl">LoGiN</p></span>
      </section>
    </div>
  );
};

export default Login;
