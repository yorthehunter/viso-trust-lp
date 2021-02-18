import React from 'react'

import { AppBar, IconButton, makeStyles, Toolbar, Typography, Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  globalNav: {
    backgroundColor: "#262626",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  login: {
    marginLeft: "auto",
  },
}));


const GlobalNav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="fixed" className={classes.globalNav}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              LOGO
            </Typography>
            <Button color="inherit" className={classes.login}>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}

export default GlobalNav
