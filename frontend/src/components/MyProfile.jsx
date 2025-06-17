import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../lib/api";

import { useThemeStore } from "../store/useThemeStore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { CalendarFoldIcon, CheckCheck } from "lucide-react";
const MyProfile = () => {
  const { theme } = useThemeStore();

  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMyProfile,
  });
  const activityData = [
    { day: "Mon", activity: 5 },
    { day: "Tue", activity: 8 },
    { day: "Wed", activity: 2 },
    { day: "Thu", activity: 6 },
    { day: "Fri", activity: 4 },
    { day: "Sat", activity: 7 },
    { day: "Sun", activity: 3 },
  ];

  const friendsGrowthData = [
    { month: "Jan", friends: 1 },
    { month: "Feb", friends: 2 },
    { month: "Mar", friends: 3 },
    { month: "Apr", friends: 5 },
    { month: "May", friends: 5 },
    { month: "Jun", friends: 6 },
  ];

  const [date, setDate] = useState(new Date());

  const tasks = [
    "Landing Page Design",
    "Mobile App Design",
    "Dashboard Builder",
    "Landing Page Design",
    "Dashboard Builder",
  ];

  // console.log(user)
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6" data-theme={theme}>
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="card-body space-y-4">
          {/* Profile header */}
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.profilePic} alt={user.fullName} />
              </div>
            </div>
            <div>
              <h2 className="card-title">
                {user.fullName}
                <CheckCheck />
              </h2>
              <p className="opacity-70">Email: {user.email}</p>
              <p className="text-sm opacity-70">Location: {user.location}</p>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Bio</p>
              <p className="text-[14px] opacity-70">{user.bio || "N/A"}</p>
            </div>
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Native Language</p>
              <p className="text-md opacity-70">{user.nativeLanguage}</p>
            </div>
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Learning Language</p>
              <p className="text-md opacity-70">{user.learningLanguage}</p>
            </div>
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Friends</p>
              <p className="text-md opacity-70">{user.friends.length}</p>
            </div>
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Created At</p>
              <p className="text-md opacity-70">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="card bg-base-100 p-3 shadow">
              <p className="font-semibold text-sm">Updated At</p>
              <p className="text-md opacity-70">
                {new Date(user.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Graphs */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="card bg-base-100 p-4 shadow flex-1">
              <h3 className="font-semibold mb-2">Weekly Activity</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="activity" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="card bg-base-100 p-4 shadow flex-1">
              <h3 className="font-semibold mb-2">Friends Growth</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={friendsGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="friends" fill="  #8C9EFF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Calendar + FAQ */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className="flex flex-col lg:flex-row gap-6 p-6 bg-base-100 rounded-xl shadow-lg"
              data-theme={theme}
            >
              {/* Tasks */}
              <div className=" rounded-xl p-5 w-full lg:w-1/2 shadow-md  bg-base-200 ">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-violet-600 p-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="font-bold text-lg">Tasks</h2>
                  </div>
                  <button className="btn btn-sm btn-ghost">⋮</button>
                </div>

                <ul className="space-y-3">
                  {tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <input type="checkbox" className="checkbox" />
                      <span className="flex-1 ml-2">{task}</span>
                      <span className="cursor-move text-gray-400">⋮⋮</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Calendar */}
              <div className=" rounded-xl p-5 w-fit lg:w-1/2 shadow-md bg-base-200">
                <div className="txt-md font-bold flex mb-3 gap-2 ">
                  <CalendarFoldIcon />
                  Calendar
                </div>
                <Calendar
                  onChange={setDate}
                  value={date}
                  nextLabel=">"
                  prevLabel="<"
                  className="w-full"
                  tileClassName={({ date, view }) =>
                    view === "month" &&
                    date.toDateString() === new Date().toDateString()
                      ? "bg-violet-600 text-white rounded-lg"
                      : ""
                  }
                />
              </div>
            </div>
            {/*  */}
            <div className="card bg-base-100 p-4 shadow flex-1 space-y-2">
              <h3 className="font-semibold mb-2">FAQ</h3>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title">How to add friends?</div>
                <div className="collapse-content">
                  Go to recommendations and click Send Request.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title">How to change languages?</div>
                <div className="collapse-content">
                  Visit your settings page and edit profile.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title">Is this free?</div>
                <div className="collapse-content">
                  Yes, 100% free for all users.
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title">Can I delete my account?</div>
                <div className="collapse-content">
                  Yes, contact support or use account settings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
