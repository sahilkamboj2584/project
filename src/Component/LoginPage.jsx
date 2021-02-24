import React,{useState} from 'react'
import {Grid,TextField,Button, makeStyles} from '@material-ui/core'


const useStyles =makeStyles(() =>({

    ct:{
     alignItems:"center ",
     justifyContent:"center",
  
    },
  
  
  
  }))


function LoginPage({Login}) {

 const [state, setstate] = useState({email:"", password:""})
 
 const submitHandler= (e) => {
       e.preventDefault();
       Login(state)
 }

    const classes=useStyles();
    return (
        <div>
     <Grid container sm={12} className={classes.ct}>
       
       <div >
       <h1>Login</h1><br/>
      <form onSubmit={submitHandler} autoComplete="on">
     

        
        <TextField
        onChange={ (e) => setstate({ ...state,email:e.target.value})}
          value={state.email}
          id="email"
          name="email"
          label="Email"
         
        /><br />
        <TextField
          onChange={ (e) => setstate({ ...state,password:e.target.value})}
          value={state.password}
          id="password"
          name="password"
          label="Password"
          type="password"
         
        /><br />
          
       
    
      <br/>
        
        <Button color="primary" variant="contained"  type="submit">
          Login 
        </Button>
        <br />
      


      </form>


    </div>
    </Grid>
        </div>
    )
}

export default LoginPage
