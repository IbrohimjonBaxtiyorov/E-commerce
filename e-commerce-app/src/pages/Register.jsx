import logo from "@/assets/logo.svg";
import signUp from "@/assets/signup-bg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validation2 } from "@/lib/utils";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/redux-toolkit/slices/commerse-slice";
const baseUrl = import.meta.env.VITE_API_URL;
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sentData = {};
    formData.forEach((value, key) => {
      sentData[key] = value;
    });
    const result = validation2(sentData);
    if (result) {
      const { target, message } = result;
      e.target[target].focus();
      toast.error(message);
    } else {
      try {
        const res = await fetch(`${baseUrl}/api/auth/local/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: sentData.userName,
            email: sentData.email,
            password: sentData.password,
          }),
        }).then((res) => res.json());
        if (res?.jwt) {
          localStorage.setItem("token", res.jwt);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(setUser({ user: res.user, token: res.jwt }));
          navigate("/");
        } else {
          toast.error(res?.error?.message || "Login failed");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className=" h-full ">
      <div className=" h-full flex justify-between items-center">
        <div className="bg-white max-w-[488px] h-full  px-[50px] pt-[93px] items-center">
          <div className="flex flex-col items-center gap-5">
            <img width={92} height={92} src={logo} alt="logo img" />
            <h3>Sign Up</h3>
          </div>
          <form className="flex flex-col gap-6 mt-7 " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-[348px] p-[15px] bg-[#F7F7F8] rounded-[10px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="johnkevine4362"
                className="w-[348px] p-[15px] bg-[#F7F7F8] rounded-[10px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-[348px] p-[15px] bg-[#F7F7F8] rounded-[10px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">
                By creating an account you agree to the terms of use and our
                privacy policy.
              </label>
            </div>
            <button
              className="bg-[#605BFF] py-[14px] rounded-[10px] text-white"
              type="submit"
            >
              Create account{" "}
            </button>
          </form>
          <div className="mt-[30px] text-center">
            <p>
              Already have an account ?{" "}
              <Link className="text-[#605BFF]" to={"/login"}>
                {" "}
                Log in
              </Link>
            </p>
          </div>
        </div>
        <img
          className="mr-[157px]"
          src={signUp}
          alt=""
          width={647}
          height={602}
        />
      </div>
    </div>
  );
}
