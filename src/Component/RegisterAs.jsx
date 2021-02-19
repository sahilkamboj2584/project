
import { Button } from '@material-ui/core';
import React from 'react'

import {TextField,Grid, makeStyles} from '@material-ui/core/';
import { Link} from "react-router-dom";

const useStyles =makeStyles((theme) =>({

    ct:{
     alignItems:"center ",
     justifyContent:"center",
  
    },
  
  
  
  }))

function RegisterAs() {
    const classes =useStyles();
    return (
        <Grid container sm={12}className={classes.ct} >
        <div >
    <Link to='/register'>  <Button variant="outlined" color="inherit" >Register As individual</Button></Link>  
    <Link to='/registercompany' > <Button variant="outlined" color="inherit" >Register As company </Button></Link>
        </div>
        </Grid>
    )
}

export default RegisterAs
