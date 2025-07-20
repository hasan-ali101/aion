import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";

const chartData = [{ percentage: 82, fill: "#2E4E3F" }];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
} satisfies ChartConfig;

export function DepressionChart() {
  return (
    <Card className="flex h-full w-full flex-col shadow-none">
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
                          achieved clinically
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 22}
                          className="fill-muted-foreground md:text-sm"
                        >
                          significant improvement
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 44}
                          className="fill-muted-foreground md:text-sm"
                        >
                          in depression scores
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 66}
                          className="fill-muted-foreground md:text-sm"
                        >
                          (PHQ 9)
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
            Cohort Case Report: Ketamine-Assisted Therapy Within a Community of
            Practice for Healthcare Providers with PTSD and Depression (2022)
          </p>
          <p className="italic">
            Shannon Dames, Pamela Kryskow, Crosbie Watler et al
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
