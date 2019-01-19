import React, {Component} from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'

const data02 = [
  {name: 'healthy', value: 72},
  {name: 'not-so-healthy', value: 28}
]

class SimplePieChart extends Component {
  render() {
    return (
      <ResponsiveContainer height={500}>
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
