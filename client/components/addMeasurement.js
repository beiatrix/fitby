import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Select from '@material-ui/core/Select'
import {withStyles, withTheme} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: '600',
    fontFamily: 'CircularStd, sans-serif',
    letterSpacing: '0.1rem'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class AddMeasurement extends Component {
  state = {
    type: ''
  }

  componentDidMount() {
    this.setState({
      // labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {classes} = this.props

    return (
      <Card id="addMeasurement">
        <div id="addMeasurementHeader">
          <h3>+ ADD MEASUREMENT</h3>
        </div>
        <CardContent>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="type">measurement type</InputLabel>
              <Select
                value={this.state.type}
                onChange={this.handleChange}
                name="type"
              >
                <MenuItem value="weight">weight</MenuItem>
                <MenuItem value="body fat">body fat percentage</MenuItem>
                <MenuItem value="waist">waist</MenuItem>
                <MenuItem value="hips">hips</MenuItem>
                <MenuItem value="thighs">thighs</MenuItem>
                <MenuItem value="chest">chest</MenuItem>
                <MenuItem value="arms">arms</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="data">enter amount</InputLabel>
              <Input name="data" id="data" />
            </FormControl>
          </form>
        </CardContent>
        <CardActions>
          <Button id="addMeasurementSubmit" fullWidth>
            SUBMIT
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(AddMeasurement)

// <div>
// <Grid container spacing={8} alignItems="flex-end">
//             <Grid item>
//               <h5>TYPE</h5>
//             </Grid>

//             {/* ========= TYPE ========= */}
//             <Grid item>
//               <FormControl fullWidth>
//                 {/* <InputLabel htmlFor="type">measurement type</InputLabel> */}
//                 <Select
//                   value={this.state.type}
//                   onChange={this.handleChange}
//                   name="type"
//                 >
//                   <MenuItem value="weight">Weight</MenuItem>
//                   <MenuItem value="body fat">Body Fat Percentage</MenuItem>
//                   <MenuItem value="waist">Waist</MenuItem>
//                   <MenuItem value="hips">Hips</MenuItem>
//                   <MenuItem value="thighs">Thighs</MenuItem>
//                   <MenuItem value="chest">Chest</MenuItem>
//                   <MenuItem value="arms">Arms</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           {/* ========= DATA ========= */}
//           <Grid container spacing={8} alignItems="flex-end">
//             <Grid item>
//               <h5>DATA</h5>
//             </Grid>
//             <Grid item>
//               <TextField
//                 id="input-with-icon-grid"
//                 label="enter amount"
//                 fullWidth
//               />
//             </Grid>
//           </Grid>
//           </div>
