import { axiosInstance } from "./axios";
import axios from "axios";
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

export const getUserFriends =async () => {
  const response = await axiosInstance.get("/users/friends");
  return response.data;
  
}

export const getRecommendedUser = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const getOutgoingFriendReqs=async () => {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data;
}

export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/users/friend-request/${userId}`);
  return response.data;
}


export const getFriendRequests=async () => {
  const response = await axiosInstance.get(`/users/friend-requests`);
  return response.data;
}

export async function acceptFriendRequest(requestId) {

  const response = await axiosInstance.put(
    `/users/friend-request/${requestId}/accept`
  );
  return response.data;
}


export async function getStreamToken() {
  const res = await axiosInstance.get("/chat/token");
  return res.data;
}

export const getMyProfile = async () => {
  const res = await axiosInstance.get("/users/me");
  return res.data;
};


export const googleLogin = async (credential) => {
  const { data } = await axios.post(
    "http://localhost:5001/api/auth/google/callback",
    { credential }
  );
  return data;
};