// // import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { images } from '../assets/assests'
// // const ForgotPassword = () => {
// //   const [email, setEmail] = useState('')
// //   const [emailError, setEmailError] = useState('')
// //   const [successMessage, setSuccessMessage] = useState('')
// //   const [isSubmitting, setIsSubmitting] = useState(false)
// //   const navigate = useNavigate()

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setEmailError('')
// //     setSuccessMessage('')

// //     setIsSubmitting(true)
// //     setTimeout(() => {
// //       console.log('Reset link sent to:', email)
// //       setSuccessMessage('Password reset link sent to your email!')
// //       setIsSubmitting(false)
// //     }, 1500)
// //   }

// //   return (
// //    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-500 to-blue-100">
// //   <div className="bg-black shadow-2xl rounded-xl p-6 flex flex-col md:flex-row w-full max-w-5xl">

// //     {/* Left Illustration Section */}
// //     <div className="w-full md:w-1/2 flex items-center justify-center p-6">
// //       <img
// //         src={images.forgotImg} // replace with your image path
// //         alt="Forgot Password Illustration"
// //         className="max-w-full h-auto"
// //       />
// //     </div>

// //     {/* Right Form Section */}
// //     <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
// //       <h2 className="text-3xl font-semibold text-gray-50 mb-2 text-center">Reset Your Password ?</h2>
// //       {/* <h3 className="text-3xl font-semibold text-gray-800 mb-6"></h3> */}

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           id="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email Address"
// //           required
// //           className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
// //         />
// //         <button
// //           type="submit"
// //           disabled={isSubmitting}
// //           className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:from-blue-500 hover:to-blue-700 transition"
// //         >
// //           {isSubmitting ? 'Sending...' : 'RESET PASSWORD'}
// //         </button>
// //       </form>

// //       {successMessage && (
// //         <p className="text-green-600 text-sm mt-4 text-center">{successMessage}</p>
// //       )}
// //       <button
// //         onClick={() => navigate('/login')}
// //         className="text-lg  mt-4 hover:scale-105 transition-all duration-150 text-center bg-blue-500 text-white p-2 rounded"
// //       >
// //         Back to sign in
// //       </button>
// //     </div>
// //   </div>
// // </div>

// //   )
// // }

// // export default ForgotPassword

// import React, { useContext, useRef, useState } from "react";
// import { images } from "../assets/assests";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const navigate=useNavigate()
//   const { backendURL } = useContext(AppContext);
//   axios.defaults.withCredentials = true;

//   const [showpassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [newPassword, setnewPassword] = useState("");
//   const [isEmailsent, setIsEmailsent] = useState("");
//   const [otp, setOtp] = useState(0);
//   const [isOtpsubmitted, setIsOtpSubmitted] = useState(false);
//   const [emailError,setEmailError]=useState('')
//   const [otpError,setOtpError]=useState('')
//   const [passwordError,setPasswordError]=useState('')
//   const [countdown,setCountdown]=useState(60)
//   const inputrefs = useRef([]);
//   const handleInput = (e, index) => {
//     if (e.target.value.length > 0 && index < inputrefs.current.length - 1) {
//       inputrefs.current[index + 1].focus();
//     }
//   };
//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && e.target.value === "" && index > 0) {
//       inputrefs.current[index - 1].focus();
//     }
//   };
//   const handlePaste = (e) => {
//     const paste = e.clipboardData.getData("text");
//     const pasteArray = paste.split("");
//     pasteArray.forEach((char, index) => {
//       if (inputrefs.current[index]) {
//         inputrefs.current[index].value = char;
//       }
//     });
//   };
//   const onsubmitEmail = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         backendURL + "/api/auth/send-reset-otp",
//         { email }
//       );
//       data.success ? toast.success(data.message) : toast.error(data.message);
//       data.success && setIsEmailsent(true);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   const onsubmitOTP=async (e) => {
//      e.preventDefault()
//     const otpArray=inputrefs.current.map(e=>e.value)
//     setOtp(otpArray.join(''))
//     setIsOtpSubmitted(true)
//   }
//   const onsubmitNewPassword=async (e) => {
//      e.preventDefault()
//      try {
//       const {data}=await axios.post(backendURL+'/api/auth/reset-password',{email,code:otp,newPassword})
//       data.success?toast.success(data.message):console.log('error');

//       data.success && navigate('/login')

//      } catch (error) {
//       toast.error(error.message)
//      }

//   }
//   return (

//      <div className="bg-gradient-to-r from-blue-500 to-pink-300 min-h-screen flex items-center justify-center p-4">
//      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//         <div className="flex flex-col items-center justify-center mb-6">
//           <div className="inline-block p-4 bg-blue-100 rounded-full mb-3">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-8 w-8 text-blue-600"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//       />
//     </svg>
//   </div>

// </div>

//       {!isEmailsent && (
//         <form
//           className="space-y-5"
//           onSubmit={onsubmitEmail}
//         >
//           <h1 className="text-2xl font-bold text-center text-gray-800">
//             Reset Password
//           </h1>
//           <p className="text-center mb-6 text-indigo-300">
//             Enter Your registered email address
//           </p>
//           <div className="relative">
//             <i className="fa fa-envelope absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
//             />
//             <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white">
//               Verify Email
//             </button>
//           </div>
//         </form>
//       )}
//       {/* OTP INPUT FORM */}
//       {!isOtpsubmitted && isEmailsent && (
//         <form
//           className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
//           onSubmit={onsubmitOTP}
//         >
//           <h1 className="text-white text-2xl font-semibold text-center mb-4">
//             Reset Password OTP
//           </h1>
//           <p className="text-indigo-300 mb-6 text-center">
//             Enter the 6-digit code sent to your Email
//           </p>
//           <div className="flex justify-between mb-8" onPaste={handlePaste}>
//             {Array(6)
//               .fill(0)
//               .map((_, index) => (
//                 <input
//                   type="text"
//                   maxLength="1"
//                   key={index}
//                   required
//                   className="w-12 h-12 bg-[#333A5c] text-white text-center text-xl rounded-md"
//                   ref={(e) => (inputrefs.current[index] = e)}
//                   onInput={(e) => handleInput(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                 />
//               ))}
//           </div>
//           <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white">
//             Verify Email
//           </button>
//         </form>
//       )}
//       {/* ENTER THE NEW PASSWORD */}
//       {isOtpsubmitted && isEmailsent && (
//         <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm" onSubmit={onsubmitNewPassword}>
//           <div className="relative">
//             <i className="fa fa-key absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
//             <input
//               id="password"
//               type={showpassword ? "text" : "password"}
//               value={newPassword}
//               onChange={(e) => setnewPassword(e.target.value)}
//               placeholder="Enter password"
//               className="w-full pl-10 pr-10 py-2 rounded-md border-2 border-amber-300 bg-pink-50 text-black focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
//             />
//             <i
//               className={`fa-solid ${
//                 showpassword ? "fa-eye-slash" : "fa-eye"
//               } text-amber-500 absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer`}
//               onClick={() => setShowPassword(!showpassword)}
//             ></i>
//             <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full text-white">
//               Verify Email
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useContext, useEffect, useRef, useState } from "react";
import { images } from "../assets/assests";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { backendURL } = useContext(AppContext);
  axios.defaults.withCredentials = true;

  const [showpassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [isEmailsent, setIsEmailsent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpsubmitted, setIsOtpSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputrefs = useRef([]);
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputrefs.current.length - 1) {
      inputrefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputrefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputrefs.current[index]) {
        inputrefs.current[index].value = char;
      }
    });
  };
  const onsubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendURL + "/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailsent(true);
    } catch (error) {
      toast.error(error.message);
    }
    if (email.length == 0) {
    setEmailError('Fields should not be empty');
  } else {
    setEmailError('');
  }
  };
  const onsubmitOTP = async (e) => {
    e.preventDefault();
    const otpArray = inputrefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmitted(true);
    if (otp.length == 0) {
    setOtpError('Fields should not be empty');
  } else {
    setOtpError('');
  }
  };
  const onsubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendURL + "/api/auth/reset-password",
        { email, code: otp, newPassword }
      );
      data.success ? toast.success(data.message) : console.log("error");

      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
     if (newPassword.length == 0) {
    setPasswordError('Fields should not be empty');
  } else {
    setPasswordError('');
  }
  };
  

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {!isEmailsent && (
          <form className="space-y-5" onSubmit={onsubmitEmail}>
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Reset Password
            </h1>
            <p className="text-center mb-6 text-gray-800">
              Enter Your registered email address
            </p>
            <div className="relative">
              <i className="fa fa-envelope absolute left-3 top-9 transform -translate-y-1/2 text-blue-600"></i>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full pl-10 px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
              />
              <br />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
               <br />
               <br />
              <button className="w-full py-3 bg-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Verify Email
              </button>
            </div>
          </form>
        )}
        {/* OTP INPUT FORM */}
        {!isOtpsubmitted && isEmailsent && (
          <form className="space-y-5" onSubmit={onsubmitOTP}>
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Reset Password OTP
            </h1>
            <p className="text-gray-800 mb-6 text-center">
              Enter the 6-digit code sent to your Email
            </p>
            <div className="flex justify-center gap-3" onPaste={handlePaste}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    required
                    className="w-12 h-14 text-2xl text-black text-center border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ref={(e) => (inputrefs.current[index] = e)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
            </div>
            {otpError && (
              <p className="text-red-500 text-sm text-center">{otpError}</p>
            )}
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              Verify Email
            </button>
            <div className="text-center text-sm text-gray-950">
              <span
                type="button"
                disabled={countdown > 0}
                onClick={() => setCountdown(60)}
                className=" text-black hover:text-blue-900 font-medium disabled:text-gray-400"
              >
                {countdown > 0 && <span>({countdown}s)</span>}
              </span>
            </div>
            {otpSuccess && (
              <p className="text-green-600 text-center font-medium">
                Verification successful!
              </p>
            )}
          </form>
        )}
        {/* ENTER THE NEW PASSWORD */}
        {isOtpsubmitted && isEmailsent && (
          <form className="space-y-5" onSubmit={onsubmitNewPassword}>
            <div className="relative">
              <i className="fa fa-key absolute left-3 top-7 transform -translate-y-1/2 text-amber-500"></i>
              <input
                id="password"
                type={showpassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-2 rounded-md bg-white text-black ring-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i
                className={`fa-solid ${
                  showpassword ? "fa-eye-slash" : "fa-eye"
                } text-amber-500 absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer`}
                onClick={() => setShowPassword(!showpassword)}
              ></i>
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
                Verify Email
              </button>
            </div>
            {resetSuccess && (
              <p className="text-green-600 text-center mt-4 font-medium">
                Your password has been reset successfully!
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
