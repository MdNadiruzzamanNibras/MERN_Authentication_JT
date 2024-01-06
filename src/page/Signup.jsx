import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate()
  // const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    jobPortal: "",
    city: "",
    state: "",
  });
  const setData = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userInfo);
    // const { name, email, password, phone, gender, jobPortal, city, state } =
    //   userInfo;
    // console.log(name, email, password, phone, gender, jobPortal, city, state);
    const res = await fetch(
      "https://mern-authentication-backend-jt.onrender.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Add success");
      console.log(data);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <form onSubmit={handleRegister}>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setData(e)}
              placeholder="Your Name"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
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
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Phone</span>
            </label>
            <input
              type="number"
              name="phone"
              onChange={setData}
              placeholder="Your phone"
              className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
            />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base text-black font-bold">Gender</span>
              </label>
              <input
                type="text"
                onChange={setData}
                name="gender"
                placeholder="Your Gender"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
            <div className="flex flex-col ml-3">
              <label className="label">
                <span className="text-base text-black font-bold">
                  Job Portal
                </span>
              </label>
              <input
                type="text"
                onChange={setData}
                name="jobPortal"
                placeholder="Job Portal"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <label className="label">
                <span className="text-base text-black font-bold">City</span>
              </label>
              <input
                type="text"
                onChange={setData}
                name="city"
                placeholder="Your City"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
            <div className="flex flex-col ml-3">
              <label className="label">
                <span className="text-base text-black font-bold">State</span>
              </label>
              <input
                type="text"
                onChange={setData}
                name="state"
                placeholder="Your State"
                className="text-center py-2 w-full my-2 border-2 focus:outline-none rounded"
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-lg text-white mr-10 mt-10"
            >
              Sign Up
            </button>
          </div>
          {/* <p>{ error}</p> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
