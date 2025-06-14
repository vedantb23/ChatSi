import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";

const App = () => {
  
  const { isLoading, authUser } = useAuthUser()
  
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if (isLoading) {
    return <PageLoader/>
  }
    return (
      <div className="h-screen" data-theme="corporate">
        {/* <div className="navbar bg-red-500">hi </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={authUser?<HomePage />:<Navigate to="/login"} /> */}

          <Route
            path="/signup"
            element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/notifications"
            element={
              isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/call"
            element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/chat"
            element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/onboarding"
            element={
              isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />
            }
          />
        </Routes>

        <Toaster />
      </div>
    );
};

export default App;
