import { useState } from "react";
import plus from "../assets/analyticImages/plus.svg";
import AnalyticForm from "@/components/AnaliyticForm";
import AnalyticCard from "@/components/AnalyticCard";

export default function Analytics() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-[30px] w-full h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[#030229] text-2xl font-bold inline ">
          Customer List
        </h2>

        {open ? (
          ""
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="mr-[30px] cursor-pointer bg-[#605BFF] px-5 py-[10px] flex items-center gap-2 rounded-[10px] text-[#FFFFFF]"
          >
            <img src={plus} /> Add Customer
          </button>
        )}
      </div>
      <div className="flex  justify-between h-full gap-[30px]">
        <div className="w-full  flex items-center flex-col gap-2 pt-[30px]">
          <AnalyticCard />
        </div>
        <div className="mt-[-60px]">
          {open ? <AnalyticForm onClose={() => setOpen(false)} /> : ""}
        </div>
      </div>
    </div>
  );
}
