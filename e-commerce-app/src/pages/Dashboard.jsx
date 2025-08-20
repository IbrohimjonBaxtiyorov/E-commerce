import { CalendarCard } from "@/components/CalendarCard";
import Card from "@/components/Card";
import { Chart } from "@/components/Chart";
import DashboardCards from "@/components/DashboardCards";
import { DataTable } from "@/components/DataTable";
import { MyPieChart } from "@/components/MyPieChart";
import { ResponsiveContainer } from "recharts";

export default function Dashboard() {
  return (
    <div className="p-[30px] pl-0 w-full grid grid-cols gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[#030229] text-[22px] font-bold">Dashboard</h2>
        <div className="flex items-center gap-[15px]">
          <CalendarCard />
          <CalendarCard />
        </div>
      </div>

      <div className="w-full">
        <DashboardCards />{" "}
      </div>

      <div className="flex justify-between gap-[30px]">
        <div className="min-w-[702px] w-full min-h-[408px] ">
          <ResponsiveContainer width="100%" height="100%">
            <Chart />
          </ResponsiveContainer>
        </div>

        <div className="min-h-[408px] ">
          <ResponsiveContainer width="100%" height="100%">
            <MyPieChart />
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[30px]">
        <div className="min-w-[702px] w-full p-0">
          <ResponsiveContainer width="100%" height={"100%"}>
            <DataTable />
          </ResponsiveContainer>
        </div>
        <div className="h-[335px]">
          <ResponsiveContainer width="100%" height={"100%"}>
            <Card />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
