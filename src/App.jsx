import React, { useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import OurWorks from "./pages/OurWorks";
// import About from "./pages/About";
// // import CareerGuidance from './pages/CareerGuidance'
// import Incubator from "./pages/Incubator";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignupPage";
// import Login from "./pages/LoginPage";
// import ForgotPassword from "./pages/ForgotPassword";
// import EmailVerification from "./pages/EmailVerification";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import PulseLoader from "react-spinners/PulseLoader";
const Home=lazy(()=>import('./pages/Home'))
const OurWorks = lazy(() => import("./pages/OurWorks"));
const About = lazy(() => import("./pages/About"));
const Incubator = lazy(() => import("./pages/Incubator"));
const SignUp = lazy(() => import("./pages/SignupPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <PulseLoader color="#4F46E5" />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/about" element={<About />} />
          {/* <Route path='/careerGuidance'element={<CareerGuidance/>}/> */}
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<EmailVerification />} />
        </Routes>
      </Suspense>
      <ToastContainer />
      <Footer />
      
    </div>
  );
};

export default App;
