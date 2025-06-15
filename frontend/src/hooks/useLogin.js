
// NOT USED

import { useMutation } from "@tanstack/react-query";
import { login } from "../lib/api";
import { useQueryClient } from "@tanstack/react-query";
const useLogin = () => {
    const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
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
    return { loginMutation:mutate, isPending,error };
}

export default useLogin
