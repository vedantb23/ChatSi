import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { getFriendRequests } from '../lib/api';

const NotificationsPage = () => {
  const queryClient = useQueryClient();
  const { data: friendRequests,isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  return <div>NotificationsPage</div>;
}

export default NotificationsPage
