"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import menu from "../assets/Menu.svg";

const chartData = [
  { hour: "10AM", desktop: 2780 },
  { hour: "11AM", desktop: 2010 },
  { hour: "12AM", desktop: 2790 },
  { hour: "1AM", desktop: 2100 },
  { hour: "2AM", desktop: 1814 },
  { hour: "3AM", desktop: 2678 },
  { hour: "4AM", desktop: 1410 },
  { hour: "5AM", desktop: 1760 },
  { hour: "6AM", desktop: 2600 },
  { hour: "7AM", desktop: 3120 },
];
const chartConfig = {
  desktop: {
    label: "Sales",
    color: "#5BC4FF",
  },
};

export function Chart() {

  return (
    <Card
      className={` min-h-[408px] border-none shadow-none`}
    >
      <CardHeader className="flex items-center justify-between ">
        <CardTitle className="text-[#030229] font-bold opacity-70">
          Reports
        </CardTitle>
        <img src={menu} alt="" />
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[330px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5BC4FF" />
                <stop offset="100%" stopColor="#FF5BEF" />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="url(#lineGradient)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
