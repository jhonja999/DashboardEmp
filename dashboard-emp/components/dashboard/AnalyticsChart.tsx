'use client'

import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
]

export default function AnalyticsChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  type ChartMouseEventProps = {
    activeTooltipIndex?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  
  const handleMouseEnter = (props: ChartMouseEventProps) => {
    if (props.activeTooltipIndex !== undefined) {
      setActiveIndex(props.activeTooltipIndex)
    }
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          onMouseMove={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
      {activeIndex !== null && (
        <div className="mt-4 text-center">
          <p>Selected month: {data[activeIndex].name}</p>
          <p>Value: {data[activeIndex].value}</p>
        </div>
      )}
    </div>
  )
}