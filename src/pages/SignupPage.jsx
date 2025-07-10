import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/assests";
// import useAuthStore from "../store/authStore";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const SignUp = () => {
  // const { register, error } = useAuthStore();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { backendURL, setIsLoggedin } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await register(name,email,password)
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendURL + "/api/auth/register", {
        name,
        email,
        password,
      });
      if (data.success) {
        setIsLoggedin(true);
        navigate("/verify-email");
      } else {
        toast.error(data.message);
      }
      //  console.log("Otp sended")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   setIsLoading(false);
    //   return;
    // }

    setTimeout(() => {
      // console.log("SignUp attempt:", { username, email, password });
      // alert("Signed up with email :"` ${email}`);
      setIsLoading(false);
      // navigate("/login");
    }, 1000);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  //   return (<>
  //  <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-yellow-50 via-white to-yellow-100">
  //   <div className="flex flex-col items-center justify-center px-4 py-6 sm:pl-8 sm:w-1/2">
  //     <img src={images.OmSheellogo} alt="Om Sheel Group Logo" className="w-24 sm:w-32 mb-4" />
  //     <h2 className="font-bold text-3xl sm:text-4xl text-gray-800 text-center">
  //       Om Sheel Group Welcomes You!
  //     </h2>
  //     <p className="text-lg font-semibold text-primary text-center mt-2 max-w-md">
  //       Where vision meets values, and every step shapes a better tomorrow.
  //     </p>
  //   </div>

  //   <div className="flex items-center justify-center w-full sm:w-1/2 px-4 py-6">
  //     <div className="bg-black bg-opacity-90 border border-gray-600 shadow-2xl p-8 w-full max-w-md rounded-xl">
  //       <h1 className="text-3xl font-extrabold text-center mb-2 text-white">Om Sheel Group</h1>
  //       <h2 className="text-xl font-semibold text-center text-white mb-6">Sign Up Form</h2>

  //       <form onSubmit={handleSubmit}>
  //         {/* Username */}
  //         <div className="mb-5">
  //           <label htmlFor="username" className="block text-yellow-400 text-md font-medium mb-2">
  //             Username
  //           </label>
  //           <div className="relative">
  //             <i className="fa fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500"></i>
  //             <input
  //               id="username"
  //               type="text"
  //               value={username}
  //               onChange={(e) => setUsername(e.target.value)}
  //               placeholder="Enter username"
  //               className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
  //               required
  //             />
  //           </div>
  //         </div>

  //         {/* Email */}
  //         <div className="mb-5">
  //           <label htmlFor="email" className="block text-yellow-400 text-md font-medium mb-2">
  //             Email
  //           </label>
  //           <div className="relative">
  //             <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500"></i>
  //             <input
  //               id="email"
  //               type="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               placeholder="Enter email"
  //               className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
  //               required
  //             />
  //           </div>
  //         </div>

  //         {/* Password */}
  //         <div className="mb-5">
  //           <label htmlFor="password" className="block text-yellow-400 text-md font-medium mb-2">
  //             Password
  //           </label>
  //           <div className="relative">
  //             <i className="fa fa-key absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500"></i>
  //             <input
  //               id="password"
  //               type="password"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //               placeholder="Enter password"
  //               className="w-full pl-10 pr-10 py-2 rounded-md border-2 border-amber-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
  //               required
  //             />
  //             <i
  //               className={`fa-solid ${
  //                 showpassword ? 'fa-eye-slash' : 'fa-eye'
  //               } text-amber-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer`}
  //               onClick={() => setShowPassword(!showpassword)}
  //             ></i>
  //           </div>
  //         </div>

  //         {/* Confirm Password */}
  //         <div className="mb-6">
  //           <label htmlFor="confirmPassword" className="block text-yellow-400 text-md font-medium mb-2">
  //             Confirm Password
  //           </label>
  //           <div className="relative">
  //             <i className="fa fa-key absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500"></i>
  //             <input
  //               id="confirmPassword"
  //               type="password"
  //               value={confirmPassword}
  //               onChange={(e) => setConfirmPassword(e.target.value)}
  //               placeholder="Confirm password"
  //               className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-500 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
  //               required
  //             />
  //           </div>
  //         </div>

  //         {/* Submit Button */}
  //         <button
  //           type="submit"
  //           disabled={isLoading}
  //           className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded-md transition duration-200"
  //         >
  //           {isLoading ? 'Signing up...' : 'Sign Up'}
  //         </button>
  //       </form>

  //       <div className="text-center mt-4">
  //         <button
  //           type="button"
  //           onClick={handleLogin}
  //           className="text-yellow-400 text-sm hover:text-yellow-300 hover:underline transition"
  //         >
  //           Already have an account? Login
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // </>
  //   );
  return (
    <motion.div
    initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-white to-blue-100 transition-all duration-500">
        {/* Left Welcome Panel */}
        <div className="flex flex-col items-center justify-center bg-amber-400 text-white  w-full sm:w-[420px] min-h-[620px] px-6 py-8  sm:rounded-l-2xl sm:rounded-r-none">
          <img
            src={images.SignupImg}
            alt="Om Sheel Group Logo"
            className="w-26 h-26  sm:w-28 mb-6  p-2 "
          />
          <h2 className="font-bold text-3xl text-center mb-2">
            Hello, Friend!
          </h2>
          <p className="text-md font-medium text-center mb-6">
            Where vision meets values, and every step shapes a better tomorrow.
          </p>
        </div>

        {/* Right Sign Up Form */}
        <div className="flex items-center justify-center w-full sm:w-[500px] px-0 py-6">
          <div className="bg-white border border-pink-200 shadow-2xl p-8 w-full max-w-md sm:rounded-r-2xl sm:rounded-l-none rounded-b-2xl">
            <h1 className="text-3xl font-extrabold text-center mb-2 text-pink-600">
              Connect With Us !
            </h1>
            <h2 className="text-xl font-semibold text-center text-blue-500 mb-6">
              To make a step closer to us
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-5">
                <label
                  htmlFor="username"
                  className="block text-amber-500 text-md font-medium mb-2"
                >
                  Username
                </label>
                <div className="relative">
                  <i className="fa fa-user absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
                  <input
                    id="username"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Enter username"
                    className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-300 bg-pink-50 text-black focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-amber-500 text-md font-medium mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <i className="fa fa-envelope absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-300 bg-pink-50 text-black focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-amber-500 text-md font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <i className="fa fa-key absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
                  <input
                    id="password"
                    type={showpassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-10 py-2 rounded-md border-2 border-amber-300 bg-pink-50 text-black focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                  />
                  <i
                    className={`fa-solid ${
                      showpassword ? "fa-eye-slash" : "fa-eye"
                    } text-amber-500 absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer`}
                    onClick={() => setShowPassword(!showpassword)}
                  ></i>
                </div>
              </div>

              {/* Confirm Password */}
              {/* <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-amber-500 text-md font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <i className="fa fa-key absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full pl-10 pr-4 py-2 rounded-md border-2 border-amber-300 bg-pink-50 text-black focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              required
            />
          </div>
        </div> */}
              {/* {error && (
                <p className="text-red-500 font-semibold mt-2">{error}</p>
              )} */}
              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2 rounded-md transition duration-200"
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleLogin}
                className="text-blue-500 text-sm hover:text-blue-600 hover:underline transition"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
