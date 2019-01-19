import React, {Component} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

class FoodItem extends Component {
  render() {
    const {food} = this.props
    console.log(food)
    return (
      <div className="foodItem">
        {food.healthy ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        <p>{food.name}</p>
      </div>
    )
  }
}

export default FoodItem
