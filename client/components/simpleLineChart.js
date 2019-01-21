import React from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import LineChart from 'recharts/lib/chart/LineChart'
import Line from 'recharts/lib/cartesian/Line'
import XAxis from 'recharts/lib/cartesian/XAxis'
import YAxis from 'recharts/lib/cartesian/YAxis'
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid'
import Tooltip from 'recharts/lib/component/Tooltip'
import Legend from 'recharts/lib/component/Legend'

// dummy data for reference
// const data = [
//   {name: 'Mon', Visits: 2200, Orders: 3400},
//   {name: 'Tue', Visits: 1280, Orders: 2398},
//   {name: 'Wed', Visits: 5000, Orders: 4300},
//   {name: 'Thu', Visits: 4780, Orders: 2908},
//   {name: 'Fri', Visits: 5890, Orders: 4800},
//   {name: 'Sat', Visits: 4390, Orders: 3800},
//   {name: 'Sun', Visits: 4490, Orders: 4300}
// ]

const COLORS = ['#82ca9d', '#8884d8']

//util function to get all data keys! one data key => one line in this chart.
const getDataKeys = data => {
  //array of all data keys
  const allKeys = data.reduce((acc, el) => {
    acc = [...acc, ...Object.keys(el)]
    return acc
  }, [])
  //remove any duplicates
  const set = new Set(allKeys)

  //return array of all data keys except 'name'
  return Array.from(set).filter(key => key !== 'name')
}

const SimpleLineChart = props => {
  const {measurements} = props
  const dataKeys = getDataKeys(measurements) // an array of all data keys

  console.log('LINE CHART DATA!', measurements)

  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={measurements}>
        <XAxis dataKey="name" stroke="whitesmoke" />
        <YAxis stroke="whitesmoke" />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />

        {dataKeys.map((key, idx) => {
          return (
            <Line
              key={`${key}-${idx}`}
              type="monotone"
              dataKey={key}
              stroke={COLORS[idx % 2]}
            />
          )
        })}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SimpleLineChart
