import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/PersonRounded'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenterRounded'
import KitchenIcon from '@material-ui/icons/Kitchen'
import Button from '@material-ui/core/Button'

import Routes from '../routes'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
// import {dark} from '@material-ui/core/styles/createPalette'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarSpacer: theme.mixins.toolbar,

  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    backgroundColor: '#3b3b3b',
    // color: 'white',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
})

class PersistentDrawer extends React.Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
  }

  render() {
    const {classes, theme, handleClick, isLoggedIn} = this.props
    const {open} = this.state

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div id="navContainer">
              <div id="navLeft">
                <Link to="/home">
                  <h2>fitby</h2>
                </Link>
              </div>
              <div id="navRight">
                {isLoggedIn ? (
                  <div id="loggedIn">
                    {/* The navbar will show these links after you log in */}
                    <Link to="/fitness">
                      <IconButton color="inherit">
                        <FitnessCenterIcon />
                      </IconButton>
                    </Link>

                    <Link to="/nutrition">
                      <IconButton color="inherit">
                        <KitchenIcon />
                      </IconButton>
                    </Link>

                    <Link to="/profile">
                      <IconButton color="inherit">
                        <PersonIcon />
                      </IconButton>
                    </Link>
                  </div>
                ) : (
                  <div id="loggedOut">
                    {/* The navbar will show these links before you log in */}
                    {/* <Button color="inherit"> */}
                    <Link to="/login">Login</Link>
                    {/* </Button> */}
                    {/* <Button color="inherit"> */}
                    <Link to="/signup">Sign Up</Link>
                    {/* </Button> */}
                  </div>
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon nativeColor="whitesmoke" />
              ) : (
                <ChevronRightIcon nativeColor="whitesmoke" />
              )}
            </IconButton>
          </div>
          <Divider />
          <h3 id="drawerHeader">archives</h3>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <FitnessCenterIcon nativeColor="whitesmoke" />
              </ListItemIcon>
              <h4>Fitness</h4>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <KitchenIcon nativeColor="whitesmoke" />
              </ListItemIcon>
              <h4>Nutrition</h4>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes />
        </main>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

/**
 * PROP TYPES
 */
PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default withRouter(
  connect(mapState)(withStyles(styles, {withTheme: true})(PersistentDrawer))
)
