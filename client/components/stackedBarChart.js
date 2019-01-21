import React, {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  //WEEK 1
  {date: '12/22', cardio: 1, 'strength training': 1, stretching: 1},
  {date: '12/23', cardio: 0, 'strength training': 0, stretching: 1},
  {date: '12/24', cardio: 0, 'strength training': 1, stretching: 1},
  {date: '12/25', cardio: 1, 'strength training': 0, stretching: 0},
  {date: '12/26', cardio: 0, 'strength training': 0, stretching: 1},
  {date: '12/27', cardio: 0, 'strength training': 1, stretching: 0},
  {date: '12/28', cardio: 0, 'strength training': 0, stretching: 1},
  //WEEK 2
  {date: '12/29', cardio: 1, 'strength training': 0, stretching: 0},
  {date: '12/30', cardio: 1, 'strength training': 1, stretching: 0},
  {date: '12/31', cardio: 0, 'strength training': 1, stretching: 0},
  {date: '01/01', cardio: 1, 'strength training': 0, stretching: 0},
  {date: '01/02', cardio: 1, 'strength training': 0, stretching: 1},
  {date: '01/03', cardio: 1, 'strength training': 1, stretching: 1},
  {date: '01/04', cardio: 1, 'strength training': 1, stretching: 1},
  //WEEK 3
  {date: '01/05', cardio: 0, 'strength training': 1, stretching: 1},
  {date: '01/06', cardio: 0, 'strength training': 1, stretching: 0},
  {date: '01/07', cardio: 1, 'strength training': 1, stretching: 0},
  {date: '01/08', cardio: 0, 'strength training': 0, stretching: 0},
  {date: '01/09', cardio: 1, 'strength training': 0, stretching: 0},
  {date: '01/10', cardio: 0, 'strength training': 0, stretching: 0},
  {date: '01/11', cardio: 1, 'strength training': 1, stretching: 1}
]
// [
//   ({name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//   {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//   {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//   {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//   {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//   {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//   {name: 'Page G', uv: 3490, pv: 4300, amt: 2100})
// ]

class StackedBarChart extends Component {
  render() {
    return (
      <ResponsiveContainer width="99%" height={320}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="whitesmoke" dataKey="date" />
          <YAxis stroke="whitesmoke" />
          <Tooltip />
          <Legend />
          <Bar dataKey="cardio" stackId="a" fill="#8884d8" />
          <Bar dataKey="strength training" stackId="a" fill="deepskyblue" />
          <Bar dataKey="stretching" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default StackedBarChart
