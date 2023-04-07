import useSWR from "swr";
import useAuth from "../store/authStore";

type TransformUserResponse = {
  data: {
    id: string;
    username: string;
    email: string;
    avatar: string | null;
    role: string;
  };
};

function transformUserResponse(
  responseData: TransformUserResponse
): TransformUserResponse["data"] {
  return {
    id: responseData.data.id,
    username: responseData.data.username,
    email: responseData.data.email,
    avatar: responseData.data.avatar,
    role: responseData.data.role,
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
      const transformed = transformUserResponse(responseData);
      console.log({ responseData, transformed });
      return transformUserResponse(responseData);
    } catch (error) {
      throw error;
    }
  });

  return { data, isLoading, error };
};
