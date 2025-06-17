import { UserIcon } from 'lucide-react';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router';
import NoFriendsFound from '../components/NoFriendsFound';
import FriendCard, { getLanguageFlag } from "../components/FriendCard";
import { capitialize } from "../lib/utils";
import {
  getOutgoingFriendReqs,
  getRecommendedUser,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const MyFriendsPage = () => {

 const queryClient = useQueryClient();
  const [outgoingReqquestIds, setoutgoingReqquestIds] = useState(new Set());

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });
    return (
      <div className="p-4 sm:p-6 lg:p-8  ">
        <div className="container mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight ">
              Your Friends
            </h2>
            <Link to="/notifications" className="btn btn-outline btn-sm ">
              <UserIcon className="mr-2 size-4" />
              Friend Requests
            </Link>
          </div>

          {loadingFriends ? (
            <div className="flex justify-center py-12 ">
              <span className="loading loading-spinner loading-lg " />
            </div>
          ) : friends.length === 0 ? (
            <NoFriendsFound />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {friends.map((friend) => {
                return <FriendCard key={friend._id} friend={friend} />;
              })}
            </div>
          )}
        </div>
      </div>
    );
}

export default MyFriendsPage
