import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { login } from '../lib/api';
import toast from 'react-hot-toast';
import { dividerClasses } from '@mui/material/Divider';
import { Link } from 'react-router';
import useLogin from '../hooks/useLogin.js';
import { useThemeStore } from '../store/useThemeStore.js';

const LoginPage = () => {
  const { theme } = useThemeStore();
  const [loginData, setloginData] = useState({
  email:"",password:""
  })
  
  const queryClient = useQueryClient();
  const { mutate: loginMutation, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        toast.success("Login Done !")
    },
    onError:  (e) => {
      toast.error(
        e.response?.data?.message || e.message || "Login failed"
      );
    }
    
  })
// const { loginMutation, isPending, error } = useLogin();


  const handleLogin=(e) => {
    e.preventDefault();
    loginMutation(loginData);
    
  }
  
  return (
    <div
      className="h-screen scale-90 flex justify-center items-center p- 
    sm:p-6 md:p-8 "
      data-theme={theme}
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden ">
        {/* login form left */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col ">
          {/* logo */}
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

          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4 ">
                <div>
                  <h2 className="text-xl font-semibold ">Welcome Back</h2>
                  <p className="text-sm opacity-55">
                    Sign in to your account to continue your ChatSickness!
                  </p>
                </div>

                <div className="flex flex-col gap-3  ">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="input input-bordered rounded-2xl w-full"
                      value={loginData.email}
                      onChange={(e) =>
                        setloginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="*******"
                      className="input input-bordered rounded-2xl w-full"
                      value={loginData.password}
                      onChange={(e) =>
                        setloginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary  rounded-2xl w-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-primary hover:underline"
                      >
                        Create one
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* right image  */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* <img
                src="/chatting-3-unscreen.gif"
                alt="Language connection illustration"
                className="w-full h-full"
              /> */}

              <video width="600" muted loop autoPlay className='rounded-2xl'>
                <source src="/extraallvideo/chatting-3.mp4" type="video/mp4" />
              </video>
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
                Seamless chatting, high-quality streaming, and a lounge where
                connections grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
