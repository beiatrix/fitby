import React, {Component} from 'react'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const data = [
  //WEEK 1
  {date: '12/17', healthy: 3, 'not-so-healthy': 5},
  {date: '12/18', healthy: 2, 'not-so-healthy': 3},
  {date: '12/19', healthy: 2, 'not-so-healthy': 4},
  {date: '12/20', healthy: 3, 'not-so-healthy': 3},
  {date: '12/21', healthy: 2, 'not-so-healthy': 4},
  {date: '12/22', healthy: 4, 'not-so-healthy': 4},
  {date: '12/23', healthy: 3, 'not-so-healthy': 2},
  //WEEK 2
  {date: '12/24', healthy: 4, 'not-so-healthy': 3},
  {date: '12/25', healthy: 1, 'not-so-healthy': 3},
  {date: '12/26', healthy: 4, 'not-so-healthy': 2},
  {date: '12/27', healthy: 6, 'not-so-healthy': 3},
  {date: '12/28', healthy: 7, 'not-so-healthy': 2},
  {date: '12/29', healthy: 3, 'not-so-healthy': 0},
  {date: '12/30', healthy: 3, 'not-so-healthy': 0},
  //WEEK 3
  {date: '12/31', healthy: 6, 'not-so-healthy': 2},
  {date: '01/01', healthy: 6, 'not-so-healthy': 0},
  {date: '01/02', healthy: 5, 'not-so-healthy': 2},
  {date: '01/03', healthy: 5, 'not-so-healthy': 0},
  {date: '01/04', healthy: 5, 'not-so-healthy': 0},
  {date: '01/05', healthy: 5, 'not-so-healthy': 0},
  {date: '01/06', healthy: 4, 'not-so-healthy': 1}
]

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0

  return toPercent(ratio, 2)
}

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`
}
const renderTooltipContent = o => {
  const {payload, label} = o
  const total = payload.reduce((result, entry) => result + entry.value, 0)

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{color: entry.color}}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  )
}
class PercentAreaChart extends Component {
  render() {
    return (
      <ResponsiveContainer width="99%" height={450}>
        <AreaChart
          // width={1000}
          // height={450}
          data={data}
          stackOffset="expand"
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
          <XAxis dataKey="date" stroke="whitesmoke" />
          <YAxis tickFormatter={toPercent} stroke="whitesmoke" />
          <Tooltip
            fill="#ffffff"
            stroke="gray"
            content={renderTooltipContent}
          />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="healthy"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="not-so-healthy"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}

export default PercentAreaChart
