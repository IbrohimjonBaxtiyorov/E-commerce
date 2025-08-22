import { useState } from "react";
import plus from "../assets/analyticImages/plus.svg";
import AnalyticForm from "@/components/AnaliyticForm";

export default function Analytics() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-[30px] pl-0 w-full h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[#030229] text-2xl font-bold">Customer List</h2>

        {open ? (
          ""
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-[#605BFF] px-5 py-[10px] flex items-center gap-2 rounded-[10px] text-[#FFFFFF]"
          >
            <img src={plus} /> Add Customer
          </button>
        )}
      </div>
      {open ? <AnalyticForm onClose={() => setOpen(false)} /> : ""}
    </div>
  );
}
