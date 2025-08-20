import { useState } from "react";
import logo from "../assets/logo.svg";

import DashboardIcon from "./Icons/Dashboard";
import ChatIcon from "./Icons/ChatIcon";
import InvoiceIcon from "./Icons/InvoiceIcon";
import DocumentIcon from "./Icons/DocumentIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import MessageIcon from "./Icons/MessageIcon";
import NotificationIcon from "./Icons/NotificationIcon";
import SettingIcon from "./Icons/SettingIcon";
import LogOut from "../assets/navbarImg/Logout.svg";
import navBg from "../assets/navbarImg/nav-bg.svg";
import profilImg from "../assets/navbarImg/Profile.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { logout } from "@/lib/redux-toolkit/slices/commerse-slice";

export default function Navbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const navData = [
    { Icon: DashboardIcon, text: "Dashboard", to: "/" },
    { Icon: ChatIcon, text: "Analytics", to: "/analytics" },
    { Icon: InvoiceIcon, text: "Invoice", to: "/invoice" },
    { Icon: DocumentIcon, text: "Schedule", to: "/schedule" },
    { Icon: CalendarIcon, text: "Calendar", to: "/calendar" },
    { Icon: MessageIcon, text: "Messages", to: "/messages" },
    { Icon: NotificationIcon, text: "Notification", to: "/notification" },
    { Icon: SettingIcon, text: "Settings", to: "/settings" },
  ];

  function handleClick() {
    dispatch(logout());
    // window.location.reload()
  }

  return (
    <div className="flex h-[1035px] ">
      <div
        className={`bg-white  transition-all duration-300 flex flex-col  justify-between  pb-[30px] ${
          isExpanded
            ? "ml-0 mt-0 pt-[50px] rounded-0"
            : "ml-[30px] mt-[30px] pt-[35px] rounded-[10px]"
        } `}
        style={{ width: isExpanded ? "218px" : "80px" }}
      >
        <div>
          <div
            onClick={() => setIsExpanded((prev) => !prev)}
            className={`flex items-center ${
              isExpanded ? "flex-row gap-4 justify-center" : "flex-col"
            }`}
          >
            <img src={logo} alt="logo" className="w-[42px] h-[42px] " />
            <h2 className="text-[#030229] font-semibold text-[22px]">Base</h2>
          </div>
          <div className="flex flex-col relative items-center mt-[38px]">
            {navData.map(({ Icon, text, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={text}
                  to={to}
                  className={`flex  items-center gap-[13px] w-full py-[13px] ${
                    isExpanded ? "pl-[28px]" : " justify-center pl-0"
                  }`}
                >
                  {isActive ? (
                    <img className="absolute left-0" src={navBg} alt="" />
                  ) : (
                    ""
                  )}
                  <Icon
                    color={`${isActive ? "#605BFF" : "#9a9aa9"}`}
                    className={` text-[#605BFF] w-5 h-5 `}
                  />

                  {isExpanded ? (
                    <h3
                      className={`${
                        isActive ? "text-[#605BFF]" : "text-[#808093]"
                      } font-semibold`}
                    >
                      {text}
                    </h3>
                  ) : (
                    ""
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className={`flex ${
            isExpanded ? "" : "flex-col"
          } items-center gap-4 justify-center`}
        >
          <div>
            <img src={profilImg} width={45} height={43} alt="" />
          </div>
          <div
            className={`flex items-center justify-center ${
              isExpanded ? "gap-7" : ""
            }`}
          >
            <div>
              {isExpanded ? (
                <h2 className="text-[#000000] font-semibold text-[12px]">
                  John doe
                </h2>
              ) : (
                ""
              )}{" "}
              {isExpanded ? (
                <p className="text-[#000000] text-[10px] ">Free Account</p>
              ) : (
                ""
              )}
            </div>
            <Button
              onClick={handleClick}
              variant="outline border-none cursor-pointer "
            >
              <img src={LogOut} alt="log out img" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
