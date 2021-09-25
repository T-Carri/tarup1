import React, {Component, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import  './Home.css'

function ButtonAppBar() {
  const classes = useStyles();








  return (
    <div className="LAbarraBlanca">
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
          <Button {()=>{
            return(componentesDeInicio.component1);
          }} color="inherit">Login</Button>
          <Button {prop.componentesDeInicio.component2} color="inherit">Registrate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default class Home extends Component {
     
  const componentesDeInicio= {
       component1: <Login/>,
       component2: <Registrar/>,
       component3: <Info/>
     }  
    

    render() {
      return (

      <div>
        {this.props.componentesDeInicio}
      </div>
         //<h1>helloou</h1>
         //{areadeAcceso}
         //{efemeride}

      )
  }
}

//import Login
//import Register
/*function barraBlanca() {
     return (
        
         
     )
 
}


PEDAZO DE CODIGO QUE CORTE DEL ESTILO CON MATERIAL UI
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    width: 50,
    height: 50
  },
  title: {

    
    flexGrow: 1
    ,
  },
}));




*/
 
 