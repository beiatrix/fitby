import React, {Component} from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import {PieChart, Pie, Legend, Tooltip} from 'recharts'
import {connect} from 'react-redux'
import {fetchFood} from '../store'

const data02 = [
  {name: 'healthy', value: 72},
  {name: 'not-so-healthy', value: 28}
]

class SimplePieChart extends Component {
  async componentDidMount() {
    await this.props.fetchFood()
  }

  render() {
    const {food} = this.props

    return (
      <ResponsiveContainer width="99%" height={500}>
        <PieChart width={500} height={500} padding={0}>
          <Pie
            data={data02}
            cx={250}
            cy={250}
            innerRadius={80}
            outerRadius={240}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food
})

const mapDispatchToProps = dispatch => ({
  fetchFood: () => dispatch(fetchFood())
})

export default connect(mapStateToProps, mapDispatchToProps)(SimplePieChart)
