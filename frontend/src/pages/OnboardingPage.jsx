import React from 'react'
import { useState,useEffect } from 'react';
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {completeOnboarding} from "../lib/api.js"

import ShuffleIcon from "@mui/icons-material/Shuffle";

import { LANGUAGES } from "../constants/index.js";
import {LucideSoapDispenserDroplet, MapPinIcon, ShipWheelIcon} from "lucide-react"
const OnboardingPage = () => {

  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });


  const { mutate:onboardingMutation,isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully!");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (e) => {
      toast.error(e.response.data.message);
    }
    
    
  })

  const handleSubmit=(e) => {
    e.preventDefault();
    onboardingMutation(formState);
    
  }
  const handleRandomAvatar=() => {
    const idx = Math.floor(Math.random() * 100) + 1; // 1-100 included
    const randomAvatar = `https://api.dicebear.com/7.x/notionists/png?seed=${idx}.png`;
    setFormState({ ...formState, profilePic: randomAvatar });
    toast.success("Random profile picture generated!");
  }
  
  const handleGetLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "";
            const country = data.address.country || "";
            const locationString = `${city}, ${country}`;

            setFormState({ ...formState, location: locationString });
            toast.success("Location added!");
          } catch (err) {
            console.error(err);
            toast.error("Failed to get city name,Please Enter mannually");
          }
        },
        (error) => {
          toast.error("Unable to fetch location");
          console.error(error);
        }
      );
    } else {
      toast.error("Geolocation not supported");
    }
  };
  
  return (
    <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
      <div className="card bg-base-200 w-full max-w-3xl shadow-xl">
        <div className="card-body p-6 sm:p-8 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 ">
            Complete Your Profile{" "}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6" action="">
            {/* profile pic conatiner */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* image preveiew */}
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full ">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRandomAvatar}
                  className="btn btn-accent rounded-xl"
                >
                  <ShuffleIcon className="size-4 mr-2" />
                  Generate Random Avatar
                </button>
              </div>
            </div>
            {/* form
             */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState({ ...formState, fullName: e.target.value })
                }
                className="input input-bordered rounded-xl w-full"
                placeholder="Your full name"
              />
            </div>
            {/* BIO */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) =>
                  setFormState({ ...formState, bio: e.target.value })
                }
                className="textarea textarea-bordered rounded-xl h-24"
                placeholder="Tell others about yourself and your language learning goals"
              />
            </div>

            {/* LANGUAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NATIVE LANGUAGE */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Native Language</span>
                </label>
                <select
                  name="nativeLanguage"
                  value={formState.nativeLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      nativeLanguage: e.target.value,
                    })
                  }
                  className="select select-bordered w-full rounded-xl"
                >
                  <option value="">Select your native language</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`native-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* LEARNING LANGUAGE */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Learning Language</span>
                </label>
                <select
                  name="learningLanguage"
                  value={formState.learningLanguage}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      learningLanguage: e.target.value,
                    })
                  }
                  className="select select-bordered rounded-xl w-full"
                >
                  <option value="">Select language you're learning</option>
                  {LANGUAGES.map((lang) => (
                    <option key={`learning-${lang}`} value={lang.toLowerCase()}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* LOCATION */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <div className="relative">
                {/* Left icon inside input */}
                <MapPinIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 size-5 text-base-content opacity-70" />

                {/* Input field */}
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({ ...formState, location: e.target.value })
                  }
                  className="input input-bordered w-full rounded-xl pl-10 pr-10"
                  placeholder="City, Country"
                />

                {/* Right icon button inside input */}
                <button
                  type="button"
                  onClick={handleGetLocation}
                  className="absolute rounded-full top-1/2 right-[0px] transform -translate-y-1/2 p-1 bg-slate-300 scale-[75%] hover:scale-90 transition-transform ease-in-out duration-300"
                > Fetch my current location
                </button>
              </div>
            </div>

            {/* submit button */}
            <button
              className="btn btn-primary w-full rounded-xl "
              disabled={isPending}
              type="submit"
            >
              {!isPending ? (
                <>
                  <ShipWheelIcon className="size-5 r-2" />
                  Complete Onboarding
                </>
              ) : (
                <>
                  <LucideSoapDispenserDroplet className="animate-spin size-5 mr-2 " />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage