import React, {Component, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  './Home.css';
import Efemeride from './efemeride';
import Login from '../login/login'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: 50,
    height: 50
  },
  title: {
    flexGrow: 1
    },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <div className="logoTarup">
<img className="mainLogo" src={process.env.PUBLIC_URL + '/mainlogo.png'} ></img>
</div>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tarup 


            
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}
 
//import Login
//import Register
/*function barraBlanca() {
     return (
        
         
     )
 }*/
 
 export default class Home extends Component {
     
    constructor(props) {
        super(props)
     this.state = {
             LOGIN:false, 
             REGISTRA: false,
             info: true }
    }
      render() {
        return (
           <>
           <div class="">
           <ButtonAppBar/>
           </div>,
           <div class="home">
              
             <Login/>
              <h1>wtf</h1>,
              <Efemeride/>
              
            </div>
            </>
             
            
               

           //<h1>helloou</h1>
           //{areadeAcceso}
           //{efemeride}

        )
    }
}
