import React, { useState } from "react";

type RegisterProps = {
  username: string;
  email: string;
  password: string;
  role: "Student" | "Teacher";
};

type ErrorProps = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

const Register = () => {
  const [register, setRegister] = useState<RegisterProps>({
    username: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegister((prevRegister) => {
      return { ...prevRegister, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(register),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        alert("ok");
      } else {
        setErrors(responseData.errors);
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
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="text"
          name="username"
          value={register.username}
          onChange={handleChange}
          placeholder="username"
          required
        />
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="email"
          name="email"
          value={register.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="password"
          name="password"
          value={register.password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <select
          value={register.role}
          onChange={handleChange}
          name="role"
          className="py-2 px-4 rounded-xl outline-none"
          required
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <input
          className="bg-primary-100 py-2 px-4 rounded-xl cursor-pointer"
          type="submit"
          value="Register Now"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default Register;
