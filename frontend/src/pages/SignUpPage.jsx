import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

import {useMutation, useQueryClient} from "@tanstack/react-query"
import {axiosInstance} from "../lib/axios"
import toast from "react-hot-toast";
import { signup } from "../lib/api";
import { useThemeStore } from "../store/useThemeStore";
const SignUpPage = () => {
  const [signupData, setsignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();
  const {
    mutate: signupMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Welcome to ChatSi");
      // navigate("/");
    },
    onError: (err) => {
      toast.error(
        err.response?.data?.message || err.message || "Signup failed"
      );
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };
  const { theme } = useThemeStore();

  return (
    <>
      <div
        className="h-full flex justify-center items-center p-6 
    sm:p-6 md:p-8 scale-90 "
        data-theme={theme}
      >
        <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
          {/* sign up left  */}
          <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
            {/* logo */}
            <Link to="/openhomepage">
            <div className="mb-4 flex items-center justify-center gap-2 ">
              <img
                src="/logo-bh-white-unscreen.gif"
                alt="Logo animation"
                className="text-primary w-[85px]  "
              />
              <span className="text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                ChatSi
              </span>
            </div>
            </Link>

            {/*
             */}
            <div className="w-full">
              <form action="" onSubmit={handleSignup}>
                <div className="space-y-4">
                  <div className="flex justify-center items-center flex-col">
                    {" "}
                    <h2 className="text-xl font-semibold">Create an Account</h2>
                    <p className="text-sm opacity-70">
                      Join ChatSi and become ChatSick !
                    </p>
                  </div>

                  <div className="space-y-3 ">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>

                      <input
                        type="text"
                        placeholder="John Sins"
                        className="input input-border border-slate-400 rounded-xl w-full"
                        value={signupData.fullName}
                        onChange={(e) => {
                          setsignupData({
                            ...signupData,
                            fullName: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Your Email </span>
                      </label>

                      <input
                        type="email"
                        placeholder="JohnSins@gmail.com"
                        className="input input-border w-full border-slate-400 rounded-xl"
                        value={signupData.email}
                        onChange={(e) => {
                          setsignupData({
                            ...signupData,
                            email: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Your Password </span>
                      </label>

                      <input
                        type="password"
                        placeholder="********"
                        className="input input-border w-full border-slate-400 rounded-xl"
                        value={signupData.password}
                        onChange={(e) => {
                          setsignupData({
                            ...signupData,
                            password: e.target.value,
                          });
                        }}
                        required
                      />

                      <p className="text-xs opacity-50 mt-1">
                        Password must be at least 6 characters long.
                      </p>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-2">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm"
                          required
                        />
                        <span className="text-xs leading-tight">
                          I agree to the{" "}
                          <span className="text-primary hover:underline">
                            terms of service
                          </span>{" "}
                          and{" "}
                          <span className="text-primary hover:underline">
                            privacy policy
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary w-full rounded-xl"
                    type="submit"
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-md"></span>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-primary hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* sign up left  */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
            <div className="max-w-md p-8">
              {/* Illustration */}
              <div className="relative aspect-square max-w-sm mx-auto">
                <img
                  src="/signup-final-unscreen.gif"
                  alt="Language connection illustration "
                  className="w-full h-full"
                />
              </div>

              <div className="text-center space-y-3 mt-6">
                <div className="flex flex-row justify-center items-center">
                  <h2 className="text-xl font-semibold">
                    More Than just a Chat — It’s an Experience
                  </h2>
                  <img
                    src="/bird-hero-unscreen.gif"
                    alt=""
                    className="size-[100px]"
                  />
                </div>
                <p className="opacity-70">
                  Connect with friends, share moments, and stay in touch with
                  your loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
