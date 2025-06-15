import { axiosInstance } from "./axios";

export const signup = async  (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};
export const getAuthUser = async () => {

  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
    
  } catch (error) {
    console.log("getAuthUser", error);
    return null;
  }
}

export const completeOnboarding=async (userData) => {
  const res = await axiosInstance.post("/auth/onboarding",userData);
  return res.data;
}

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};