import React, {Component} from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import {PieChart, Pie, Cell, Tooltip} from 'recharts'

const COLORS = ['#81DEC3', '#68A69F']
// const data02 = [
//   {name: 'healthy', value: 72},
//   {name: 'not-so-healthy', value: 28}
// ]

class SimplePieChart extends Component {
  render() {
    const {data} = this.props
    return (
      <ResponsiveContainer width="99%" height={625}>
        <PieChart padding={0}>
          <Pie
            dataKey="value"
            data={data}
            cx={300}
            cy={300}
            innerRadius={100}
            outerRadius={300}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell
                key={COLORS[index % COLORS.length]}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default SimplePieChart
