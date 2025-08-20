"use client";

import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import menu from "../assets/Menu.svg";

const chartData = [
  { browser: "Sale", Transactions: 30, fill: "#5B93FF" },
  { browser: "Other", Transactions: 20, fill: "#E5E5E5" },
  { browser: "Distribute", Transactions: 25, fill: "#FFD66B" },
  { browser: "Return", Transactions: 25, fill: "#FF8F6B" },
];

const chartConfig = {
  Sale: {
    label: "Sale",
    color: "#5B93FF",
  },
  Distribute: {
    label: "Distribute",
    color: "#FFD66B",
  },
  Return: {
    label: "return",
    color: "#FF8F6B",
  },
  other: {
    label: "Other",
    color: "#E5E5E5",
  },
};

export function MyPieChart() {
  const totalTransactions = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.Transactions, -20);
  }, []);

  return (
    <Card className="flex flex-col w-[430px] h-[418px]  border-none shadow-none 2xl:w-[500px]">
      <CardHeader className=" pb-0 flex items-center justify-between">
        <CardTitle className="text-[#030229] font-bold opacity-70">
          Analytics
        </CardTitle>
        <img src={menu} alt="" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="Transactions"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTransactions.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Transactions
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className={"flex items-center justify-between"}>
        {chartData
          .filter((_, i) => i !== 1)
          .map(({ fill, browser }) => {
            return (
              <div key={fill} className="flex items-center gap-[10px]  ">
                <span
                  style={{ backgroundColor: fill }}
                  className={` w-[15px] h-[15px] rounded-[5px]`}
                ></span>
                <p className="text-[#030229] opacity-70 font-semibold">
                  {browser}
                </p>
              </div>
            );
          })}
      </CardFooter>
    </Card>
  );
}
