import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

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
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import { useEffect } from "react";
const App = () => {
  
  const { isLoading, authUser } = useAuthUser()
  const { theme } = useThemeStore();
  
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if (isLoading) {
    return <PageLoader/>
  }

    return (
      <div className="h-screen" data-theme={theme}>
        {/* <div className="navbar bg-red-500">hi </div> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route
            path="/"
            element={
              isAuthenticated && isOnboarded ? (
                <Layout showSidebar={true}>
                  <HomePage />
                </Layout>
              ) : (
                <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUpPage />
              ) : (
                <Navigate to={isOnboarded ? "/" : "/onboarding"} />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <LoginPage />
              ) : (
                <Navigate to={isOnboarded ? "/" : "/onboarding"} />
              )
            }
          />
          <Route
            path="/notifications"
            element={
              isAuthenticated && isOnboarded ? (
                <Layout showSidebar={true}>
                  <NotificationsPage />
                </Layout>
              ) : (
                <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
              )
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

          {/* ***chaneh  */}
          <Route
            path="/onboarding"
            element={
              isAuthenticated ? (
                !isOnboarded ? (
                  <OnboardingPage />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="*"
            element={
              <>
                <div className="flex flex-col justify-center items-center gap-3  h-screen top-0">
                  <div className="flex flex-col justify-center items-center  text-3xl font-bold">
                    <img
                      src="Under construction-amico.png"
                      alt=""
                      className="w-4/12"
                    />
                    Page Not Found or Under Construction
                  </div>
                  <h6 className="opacity-70">Conside Visiting Later !</h6>
                  <h1 className="text-cyan-600 hover:scale-110 hover:underline transition-transform ease-in-out duration-200 ">
                    <Link to="/">Navigate to Home</Link>
                  </h1>
                </div>
              </>
            }
          />
        </Routes>

        <Toaster />
      </div>
    );
};

export default App;
