import { useState } from "react";
import logo from "../assets/logo.svg";

import DashboardIcon from "../assets/navbarImg/Category.svg?react";
import AnalyticsIcon from "../assets/navbarImg/Chart.svg?react";
import InvoiceIcon from "../assets/navbarImg/incoise.svg?react";
import DocumentIcon from "../assets/navbarImg/Document.svg?react";
import CalendarIcon from "../assets/navbarImg/Calendar.svg?react";
import MessageIcon from "../assets/navbarImg/messages.svg?react";
import NotificationIcon from "../assets/navbarImg/Notification.svg?react";
import SettingIcon from "../assets/navbarImg/Setting.svg?react";

import navBg from "../assets/navbarImg/nav-bg.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const navData = [
    { Icon: DashboardIcon, text: "Dashboard", to: "/" },
    { Icon: AnalyticsIcon, text: "Analytics", to: "/analytics" },
    { Icon: InvoiceIcon, text: "Invoice", to: "/invoice" },
    { Icon: DocumentIcon, text: "Schedule", to: "/schedule" },
    { Icon: CalendarIcon, text: "Calendar", to: "/calendar" },
    { Icon: MessageIcon, text: "Messages", to: "/messages" },
    { Icon: NotificationIcon, text: "Notification", to: "/notification" },
    { Icon: SettingIcon, text: "Settings", to: "/settings" },
  ];

  return (
    <div className="flex h-[1035px] ">
      <div
        className={`bg-white  transition-all duration-300   ${
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
                  <Icon className={` text-[#605BFF] w-5 h-5 `} />

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
      </div>
    </div>
  );
}
