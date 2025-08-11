import { useState } from "react";
import logo from "../assets/logo.svg";

import dashboard from "../assets/navbarImg/Category.svg";
import analiytc from "../assets/navbarImg/Chart.svg";
import invoice from "../assets/navbarImg/incoise.svg";
import document from "../assets/navbarImg/Document.svg";
import calendar from "../assets/navbarImg/Calendar.svg";
import message from "../assets/navbarImg/messages.svg";
import notifications from "../assets/navbarImg/Notification.svg";
import setting from "../assets/navbarImg/Setting.svg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const navData = [
    { img: dashboard, text: "Dashboard", to: "/" },
    { img: analiytc, text: "Analytics", to: "/analytics" },
    { img: invoice, text: "Invoice", to: "/invoice" },
    { img: document, text: "Schedule", to: "/schedule" },
    { img: calendar, text: "Calendar", to: "/calendar" },
    { img: message, text: "Messages", to: "/messages" },
    { img: notifications, text: "Notification", to: "/notification" },
    { img: setting, text: "Settings", to: "/settings" },
  ];

  return (
    <div className="flex h-screen ">
      <div
        className={`bg-white shadow-md transition-all duration-300   ${isExpanded ? "ml-0 mt-0 pt-[50px] rounded-0" : "ml-[30px] mt-[30px] pt-[35px] rounded-[10px]"} `}
        style={{ width: isExpanded ? "218px" : "80px" }}
      >
        <div>
          <div
            onClick={() => setIsExpanded((prev) => !prev)}
            className={`flex items-center ${isExpanded ? "flex-row gap-4 justify-center" : "flex-col"}`}
          >
            <img src={logo} alt="logo" className="w-[42px] h-[42px] " />
            <h2 className="text-[#030229] font-semibold text-[22px]">Base</h2>
          </div>
          <div className="flex flex-col  items-center mt-[38px]">
            {navData.map(({ img, text, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  to={to}
                  className={`flex  items-center gap-[13px] w-full py-[13px] ${
                    isActive
                      ? "bg-gradient-to-r from-[#ACA9FF] to-[#ffffff]"
                      : "hover:bg-gradient-to-r from-[#ACA9FF] to-[#ffffff]"
                  } ${isExpanded ? "pl-[28px]" : " justify-center pl-0"}`}
                >
                  <img src={img} alt="" />
                  {isExpanded ? (
                    <h3 className="text-[#030229] font-semibold hover:text-[#605BFF]">
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
