import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
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
        <CardHeader
          id="addMeasurementHeader"
          title="+ ADD MEASUREMENT"
          titleTypographyProps={{align: 'center'}}
        />
        <CardContent>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <h5>TYPE</h5>
            </Grid>
            {/* ========= TYPE ========= */}
            <Grid item>
              <FormControl fullWidth>
                {/* <InputLabel htmlFor="type">measurement type</InputLabel> */}
                <Select
                  value={this.state.type}
                  onChange={this.handleChange}
                  name="type"
                >
                  <MenuItem value="weight">Weight</MenuItem>
                  <MenuItem value="body fat">Body Fat Percentage</MenuItem>
                  <MenuItem value="waist">Waist</MenuItem>
                  <MenuItem value="hips">Hips</MenuItem>
                  <MenuItem value="thighs">Thighs</MenuItem>
                  <MenuItem value="chest">Chest</MenuItem>
                  <MenuItem value="arms">Arms</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* ========= DATA ========= */}
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <h5>DATA</h5>
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="enter amount"
                fullWidth
              />
            </Grid>
          </Grid>
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

export default AddMeasurement
