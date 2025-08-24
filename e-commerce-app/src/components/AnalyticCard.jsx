import arrow from "../assets/analyticImages/downanalitic.svg";
import GenderBage from "./GenderBage";
import johndoe from "../assets/analyticImages/johndoe.svg";
import johndeo from "../assets/analyticImages/johndeo.svg";
import andrie from "../assets/analyticImages/andrie.svg";
import anne from "../assets/analyticImages/anne.svg";
import christine from "../assets/analyticImages/christine.svg";
import james from "../assets/analyticImages/james.svg";
import john from "../assets/analyticImages/john.svg";
import mark from "../assets/analyticImages/mark.svg";
import robert from "../assets/analyticImages/robert.svg";
import shelby from "../assets/analyticImages/shelby.svg";
import bethany from "../assets/analyticImages/bethany.svg";
import { useState } from "react";
import MenubarIcon from "./Icons/MenubarIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import deletes from "../assets/analyticImages/Delete.svg";
import edit from "../assets/analyticImages/Edit.svg";

export default function AnalyticCard() {
  const [isActive, setIsActive] = useState(false);
  const analiyticUsers = [
    {
      img: johndoe,
      name: "John Deo",
      email: "johndoe2211@gmail.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: shelby,
      name: "Alice Smith",
      email: "alice.smith92@gmail.com",
      phone: "+33757005467",
      gender: "female",
    },
    {
      img: robert,
      name: "Michael Johnson",
      email: "michael.johnson77@yahoo.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: john,
      name: "John Carilo",
      email: "john carilo182@.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: andrie,
      name: "Emma Davis",
      email: "emma.davis01@yahoo.com",
      phone: "+33757005467",
      gender: "female",
    },
    {
      img: johndeo,
      name: "David Wilson",
      email: "davidwilson03@gmail.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: mark,
      name: "James Miller",
      email: "james.miller65@gmail.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: bethany,
      name: "Olivia Taylor",
      email: "olivia.taylor54@gmail.com",
      phone: "+33757005467",
      gender: "female",
    },
    {
      img: christine,
      name: "William Anderson",
      email: "william.anderson29@gmail.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: anne,
      name: "Ava Martinez",
      email: "ava.martinez99@yahoo.com",
      phone: "+33757005467",
      gender: "male",
    },
    {
      img: james,
      name: "Ethan Thomas",
      email: "ethan.thomas44@gmail.com",
      phone: "+33757005467",
      gender: "male",
    },
  ];

  const thData = [
    { nameth: "Name" },
    { nameth: "Email" },
    { nameth: "Phone" },
    { nameth: "Gender" },
    { nameth: "" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_2fr_1fr_1fr_auto] font-bold">
        {thData.map(({ nameth }, i) => (
          <p
            key={nameth}
            className="flex items-center gap-[10px] text-[#030229] opacity-70 text-[12px]"
          >
            {nameth} {i < 4 && <img src={arrow} alt="" />}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-[10px] mt-[14px]">
        {analiyticUsers.map(({ name, email, gender, phone, img }) => (
          <div
            key={name}
            className="grid grid-cols-[1fr_2fr_1fr_1fr_auto] gap-2 items-center bg-[#FFFFFF] p-[15px] rounded-[10px] "
          >
            <p className="text-[#030229] text-[14px] flex items-center gap-[11px]">
              <img src={img} width={30} height={30} alt="" /> {name}
            </p>
            <p className="text-[#030229] text-[14px]">{email}</p>
            <p className="text-[#030229] text-[14px]">{phone}</p>
            <GenderBage gender={gender} />
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="mr-[30px] cursor-pointer"
                    onClick={() => setIsActive((prev) => !prev)}
                  >
                    <MenubarIcon
                      color={`${isActive ? "#605BFF" : "#9a9aa9"}`}
                    />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem className={"bg-[#F7F9FF]"}>
                    <img src={edit} alt="" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className={"bg-[#FEF3F5] mt-[5px]"}>
                    <img src={deletes} alt="" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
