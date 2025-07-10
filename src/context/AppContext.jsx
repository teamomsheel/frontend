import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendURL = import.meta.env.VITE_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);
  axios.defaults.withCredentials=true
  const getAuthState=async () => {
    try {
      const {data}=await axios.get(backendURL+'/api/auth/is-auth')
         if(data.success)
         {
          getUserData()
          setIsLoggedin(true)
         }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/user/data");
      data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(()=>
  {
    getAuthState()
  },[])
  const value = {
    backendURL,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    getAuthState
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
