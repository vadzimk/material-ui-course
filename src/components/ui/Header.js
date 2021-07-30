import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import {
  AppBar,
  makeStyles,
  Tabs,
  Tab,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/logo.svg'

const useStyles = makeStyles(theme => ({ // get access to the theme properties
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('xs')]: {

    }
  },
  logo: {
    height: '5em',
    [theme.breakpoints.down('md')]: {
      height: '4em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '3.5em'
    }
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
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    },

  }, drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: '0.7'
  },
  drawerItemSelected: {
    opacity: 1
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },

}));

export default function Header() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState('/');
  const {pathname} = useLocation();
  const location = '/'.concat(pathname.split('/')[1]);
  useEffect(() => {
    setValue(location);
  }, [pathname]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  }


  const classes = useStyles();

  const tabs = (
    <>
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
      <Menu id='simple-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose}
            MenuListProps={{onMouseLeave: handleClose}} classes={{paper: classes.menu}} elevation={0}
            style={{zIndex: 1302}}
      >
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
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                       open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
                       classes={{paper: classes.drawer}}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          <ListItem component={Link} to='/' divider button onClick={() => {setOpenDrawer(false); setValue('/')}}
                    selected={'/' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Home
            </ListItemText>
          </ListItem>
          <ListItem component={Link} to='/services' divider button onClick={() => {setOpenDrawer(false); setValue('/services')}}
                    selected={'/services' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Services
            </ListItemText>
          </ListItem>
          <ListItem component={Link} to='/revolution' divider button onClick={() => setOpenDrawer(false)}
                    selected={'/revolution' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              The revolution
            </ListItemText>
          </ListItem>
          <ListItem component={Link} to='/about' divider button onClick={() => setOpenDrawer(false)}
                    selected={'/about' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              About us
            </ListItemText>
          </ListItem>
          <ListItem component={Link} to='/contact' divider button onClick={() => setOpenDrawer(false)}
                    selected={'/contact' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Contact
            </ListItemText>
          </ListItem>
          <ListItem component={Link} to='/estimate' divider button onClick={() => setOpenDrawer(false)}
                    className={classes.drawerItemEstimate} selected={'/estimate' === location}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Free estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar position='absolute' className={classes.appbar}>
        <Toolbar disableGutters>
          <Button component={Link} to='/' className={classes.logoContainer} disableRipple>
            <img src={logo} alt='company logo' className={classes.logo}/>
          </Button>
          {
            matches ? drawer : tabs
          }
        </Toolbar>
      </AppBar>
      hello
      <div className={classes.toolbarMargin}/>
    </>

  )
}
