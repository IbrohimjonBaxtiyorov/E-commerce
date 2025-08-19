import { CalendarCard } from "@/components/CalendarCard";
import Card from "@/components/Card";
import { Chart } from "@/components/Chart";
import DashboardCards from "@/components/DashboardCards";
import { DataTable } from "@/components/DataTable";
import { MyPieChart } from "@/components/MyPieChart";
import { ResponsiveContainer } from "recharts";

export default function Dashboard() {
  // w-full
  return (
    <div className="p-[30px] pl-0 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[#030229] text-[22px] font-bold">Dashboard</h2>
        <div className="flex items-center gap-[15px]">
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>
      <div>
        <DashboardCards />{" "}
      </div>
      <div className="mt-[30px] flex justify-between gap-8">
        <div className=" min-w-[702px] h-[410px] ">
          <ResponsiveContainer width="100%" height="100%">
            <Chart />
          </ResponsiveContainer>
        </div>

        <div className=" h-[410px]">
          <ResponsiveContainer width="100%" height="100%">
            <MyPieChart />
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <DataTable />
        <Card />
      </div>
    </div>
  );
}
