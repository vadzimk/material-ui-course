import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {AppBar, makeStyles, Tabs, Tab, Toolbar, Button, Menu, MenuItem, useMediaQuery, useTheme} from '@material-ui/core';
import logo from '../../assets/logo.svg'

const useStyles = makeStyles(theme => ({ // get access to the theme properties
  toolbarMargin: {
    ...theme.mixins.toolbar,

  },
  logo: {
    height: '5em'
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: '25px',
    minWidth: '10px'
  },
  button: {
    borderRadius: '50px',
    ...theme.typography.estimate,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },

}));

export default function Header() {
  const theme = useTheme();
  const [value, setValue] = useState('/');
  const {pathname} = useLocation();
  useEffect(() => {
    const location = '/'.concat(pathname.split('/')[1]);
    setValue(location);
  }, [pathname]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }


  const classes = useStyles();
  return (
    <>
      <AppBar position='absolute'>
        <Toolbar disableGutters>
          <Button component={Link} to='/' className={classes.logoContainer} disableRipple>
            <img src={logo} alt='company logo' className={classes.logo}/>
          </Button>
          <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
            <Tab label='Home' component={Link} to='/' value='/' className={classes.tab}/>
            <Tab label='Services' component={Link} to='/services' value='/services' className={classes.tab}
                 aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup={anchorEl ? true : undefined}
                 onMouseOver={e => handleClick(e)}
            />
            <Tab label='Revolution' component={Link} to='/revolution' value='/revolution' className={classes.tab}/>
            <Tab label='About us' component={Link} to='/about' value='/about' className={classes.tab}/>
            <Tab label='Contact us' component={Link} to='/contact' value='/contact' className={classes.tab}/>
          </Tabs>
          <Button variant='contained' color='secondary' className={classes.button}>Free estimate</Button>
          <Menu id='simple-menu' anchorEl={anchorEl} open={open} onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}} classes={{paper: classes.menu}} elevation={0}>
            <MenuItem component={Link} to='/services' onClick={handleClose}
                      classes={{root: classes.menuItem}}>Services</MenuItem>
            <MenuItem component={Link} to='/services/custom-software' onClick={handleClose}
                      classes={{root: classes.menuItem}}>Custom software
              development</MenuItem>
            <MenuItem component={Link} to='/services/mobile-apps' onClick={handleClose}
                      classes={{root: classes.menuItem}}>Mobile app
              development</MenuItem>
            <MenuItem component={Link} to='/services/websites' onClick={handleClose} classes={{root: classes.menuItem}}>Website
              development</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      hello
      <div className={classes.toolbarMargin}/>
    </>

  )
}
