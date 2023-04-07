import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../store/authStore";

import { ErrorProps } from "../../types";

type LoginProps = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, setLogin] = useState<LoginProps>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<ErrorProps>({});

  const setAccessToken = useAuth((state) => state.setAccessToken);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => {
      return { ...prevLogin, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setAccessToken(responseData?.accessToken);
        navigate("/", { replace: true });
      } else {
        setError(responseData.error);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/3 bg-tertiary-100 p-8 rounded-xl flex flex-col gap-4"
      >
        {error?.email && <p>email error bang</p>}
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="email"
          name="email"
          value={login.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        {error?.password && <p>password error bang</p>}
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <input
          className="bg-primary-100 py-2 px-4 rounded-xl cursor-pointer disabled:opacity-70"
          type="submit"
          value="Login Now"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default Login;
