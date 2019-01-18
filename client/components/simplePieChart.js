import React, {Component} from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

const data02 = [
  {name: 'Group A', value: 2400},
  {name: 'Group B', value: 4567},
  {name: 'Group C', value: 1398},
  {name: 'Group D', value: 9800},
  {name: 'Group E', value: 3908},
  {name: 'Group F', value: 4800}
]

class SimplePieChart extends Component {
  render() {
    return (
      <ResponsiveContainer width="99%" height={500}>
        <PieChart width={800} height={400}>
          <Pie
            data={data02}
            cx={500}
            cy={200}
            innerRadius={75}
            outerRadius={200}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default SimplePieChart
