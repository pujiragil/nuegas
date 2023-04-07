import useSWR from "swr";
import useAuth from "../store/authStore";

type TransformUserResponse = {
  id: string;
  username: string;
  email: string;
  avatar: string | null;
  role: string;
};

function transformUserResponse(
  data: TransformUserResponse
): TransformUserResponse {
  return {
    id: data.id,
    username: data.username,
    email: data.email,
    avatar: data.avatar,
    role: data.role,
  };
}

export const useUser = () => {
  const accessToken = useAuth((state) => state.accessToken);
  const { data, isLoading, error } = useSWR("/users/info", async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/info`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
      }
      const responseData = await response.json();
      console.log(responseData);
      return transformUserResponse(responseData);
    } catch (error) {
      throw error;
    }
  });

  return { data, isLoading, error };
};
