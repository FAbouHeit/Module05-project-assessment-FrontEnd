import { useState, useEffect, createContext } from "react";
import axiosInstance from "../Utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkUser, setCheckUser] = useState(false);
  const [userUpdated , setUserUpdated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && user === null) {
      fetchUserData();
    }
  }, [user, userUpdated]);

  const fetchUserData = async () => {
    try {
      setCheckUser(true);
      const response = await axiosInstance.get("user/signedInUser");
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setCheckUser(false);
    }
  };

  const signOut = async () => {
    await axiosInstance.post("user/signout");
    setUser(null);
    navigate('/')
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        checkUser,
        setUser,
        signOut,
        fetchUserData,
        setUserUpdated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
