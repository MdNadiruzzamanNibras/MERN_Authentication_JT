import { useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const setData = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen ">
        <div className="w-96">
          <h1 className="text-4xl text-center my-10">Sign Up</h1>
          <form>
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base text-black font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setData(e)}
                placeholder="Your Email"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base text-black font-bold">password</span>
              </label>
              <input
                type="password"
                onChange={setData}
                name="password"
                placeholder="Password"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
