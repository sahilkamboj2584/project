import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';






const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    srch:{
       padding:"10px",
    },
    srch3:{
        padding: "0px",
    backgroundColor: "white",
    borderRadius: "15px",

     },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    btn: {
     textAlign:"right",
    },
    aboutuslink:{
        color:"white"
        ,
        paddinLeft: "18px",
 
        "&:hover": {
          color:"white",
          textDecoration:"none",
        }
    
} ,

about:{
    color:"white",
    display: 'inline-block',
    marginTop:'5px',
    paddingLeft: "37px",

    "&:hover": {
      color:"white",
      textDecoration:"none",
    }

} 

    
  }));

function Header() {
    const classes = useStyles();
    return (

        <Grid container item xs={12} >
      
         <AppBar position="static">
          <Toolbar>
           
            <Grid item sm={4} className={classes.srch} >
            <img src='assets/logo.png' width="100" height="30" alt="logoo"
               />
            <Link to="./"><Button><HomeIcon style={{ color: "white" }} /></Button></Link>
                </Grid>
                <Grid item sm={4} >
               <TextField className={classes.srch3} placeholder="search" />
                <Link  to="./About" className={classes.about}>
                 About us 
                </Link>
               </Grid>
               <Grid item sm={4} className={classes.btn} >
               <Button variant="outlined" color="inherit"><Link  className={classes.aboutuslink} to="./Login">Login</Link></Button>
               <Link  className={classes.aboutuslink} to="./RegisterAs"><Button variant="outlined" color="inherit">Register</Button></Link>
            </Grid>

          </Toolbar>
        </AppBar>
       
     
       </Grid>
    )
};

export default Header
