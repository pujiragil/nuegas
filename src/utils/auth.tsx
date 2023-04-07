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
  responseData: TransformUserResponse
): TransformUserResponse {
  return {
    id: responseData.id,
    username: responseData.username,
    email: responseData.email,
    avatar: responseData.avatar,
    role: responseData.role,
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
      return transformUserResponse(responseData.data);
    } catch (error) {
      throw error;
    }
  });

  return { data, isLoading, error };
};
