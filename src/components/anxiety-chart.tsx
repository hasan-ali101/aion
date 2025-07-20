import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { ChartConfig, ChartContainer } from "@/components/chart";

const chartData = [{ percentage: 91, fill: "#2E4E3F" }];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
} satisfies ChartConfig;

export function AnxietyChart() {
  return (
    <Card className="flex h-full w-full flex-col gap-6 shadow-none">
      <CardHeader className="hidden items-center md:flex">
        <CardTitle>Still not sure? Take a look at the results</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 px-0 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={(chartData[0].percentage / 100) * 360}
            innerRadius={120}
            outerRadius={150}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[130, 110]}
            />
            <RadialBar dataKey="percentage" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                          y={(viewBox.cy || 0) - 40}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].percentage.toLocaleString() + "%"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-muted-foreground md:text-sm"
                        >
                          showed meaningful
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground md:text-sm"
                        >
                          improvements in GAD 7
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 44}
                          className="fill-muted-foreground md:text-sm"
                        >
                          (anxiety score) by
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 66}
                          className="fill-muted-foreground md:text-sm"
                        >
                          end of programme
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <div className="mx-4 flex flex-col items-center gap-2 pt-4 text-center text-xs md:items-end md:text-right">
          <p>
            Ketamine-assisted psychotherapy (KAP): Demographics, Clinical
            Outcomes, and Practice Data From Three Major Clinics (2019)
          </p>
          <p className="italic">
            Jennifer Dore, Brent Turnipseed, Shannon Dwyer et al
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
