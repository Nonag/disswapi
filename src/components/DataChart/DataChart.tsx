'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export interface DataChartProps<DData> {
  chartConfig: ChartConfig;
  data: DData[];
}

export function DataChart<DData>({ chartConfig, data }: DataChartProps<DData>) {
  return (
    <Card className="shadow-none">
      <CardContent>
        <ChartContainer className="min-h-[100px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              axisLine={false}
              dataKey="column"
              tickLine={false}
              tickMargin={4}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <ChartLegend content={<ChartLegendContent />} />

            {Object.entries(chartConfig).map(([key, value]) => (
              <Bar key={key} dataKey={key} fill={value.color} radius={4} />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
