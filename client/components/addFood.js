import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addFood} from '../store'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

class AddFood extends Component {
  render() {
    const {classes} = this.props

    return (
      <div>
        <CardContent>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="data">enter amount</InputLabel>
              <Input name="data" id="data" />
            </FormControl>
          </form>
        </CardContent>
        <CardActions>
          <Button id="addFoodSubmit" fullWidth>
            SUBMIT
          </Button>
        </CardActions>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addNewGrocery: text => dispatch(addGrocery(text))
//   }
// }
// const ConnectedAddGrocery = connect(null, mapDispatchToProps)(AddGrocery)
// export default ConnectedAddGrocery

export default AddFood
