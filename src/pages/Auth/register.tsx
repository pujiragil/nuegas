const Register = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center">
      <form className="flex flex-col w-1/3 bg-tertiary-100 p-8 rounded-xl flex flex-col gap-4">
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="text"
          placeholder="username"
        />
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="email"
          placeholder="email"
        />
        <input
          className="py-2 px-4 rounded-xl outline-none"
          type="password"
          placeholder="password"
        />
        <select className="py-2 px-4 rounded-xl outline-none">
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <input
          className="bg-primary-100 py-2 px-4 rounded-xl cursor-pointer"
          type="submit"
          value="Register Now"
        />
      </form>
    </div>
  );
};

export default Register;
