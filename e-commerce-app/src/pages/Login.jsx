import logo from "@/assets/logo.svg";
import loginbg from "@/assets/login-bg.svg";
import { Link, Navigate } from "react-router-dom";
export default function Login() {
  return (
    <div className=" h-full ">
      <div className=" h-full flex justify-between items-center">
        <div className="bg-white max-w-[488px] h-full  px-[50px] pt-[200px] items-center">
          <div className="flex flex-col items-center gap-5">
            <img width={92} height={92} src={logo} alt="logo img" />
            <h3>Log In</h3>
          </div>
          <form className="flex flex-col gap-6 mt-7 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-[348px] p-[15px] bg-[#F7F7F8] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-[348px] p-[15px] bg-[#F7F7F8] rounded-[10px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button
              className="bg-[#605BFF] py-[14px] rounded-[10px] text-white"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="mt-[30px] text-center">
            <p>
              Don’t have account yet ?{" "}
              <Link className="text-[#605BFF]" to={"/register"}>
                {" "}
                New Account
              </Link>
            </p>
          </div>
        </div>
        <img className="mr-[157px]" src={loginbg} alt="" width={647} height={602} />
      </div>
    </div>
  );
}
