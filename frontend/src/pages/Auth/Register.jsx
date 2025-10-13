import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../redux/api/users";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoding: isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler=async (e)=>{
    e.preventDefault();

    if(password != confirmPassword){
        toast.error("Password not matched")
    }else{
        try {
            const res= await register({username, email, password}).unwrap()
            dispatch(setCredentials({...res}))
            navigate(redirect)
            toast.success('User Registered Successfully')
        } catch (err) {
            console.log(err);
            toast.error(err.data.message)
        }
    }
  }

  return (
    <div className="pl-[10rem] flex flex-wrap ">
      <div className="mr-[4rem] mt-[5rem]">
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        <form onSubmit={submitHandler} className="container w-[40rem]">
          {/*  User Name */}
          <div className="my-[2rem]">
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-2 mt-1 border rounded w-full"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* User Email */}
          <div className="my-[2rem]">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 mt-1 border rounded w-full"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* User Password */}
          <div className="my-[2rem]">
            <label htmlFor="password" className="block text-sm font-medium ">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 mt-1 border rounded w-full"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="my-[2rem]">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium "
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-2 mt-1 border rounded w-full"
              placeholder="Re-Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem] "
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          {isLoading && <Loader />}
        </form>
        <div className="mt-4">
          <p className="text-white">
            Already have an account ?{" "}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
              className="text-teal-500 hover:underline "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* Set an Image */}
    </div>
  );
};

export default Register;
