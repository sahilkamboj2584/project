import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {Button,TextField,Grid, makeStyles} from '@material-ui/core/';

import axios from 'axios';

const useStyles =makeStyles(() =>({

  ct:{
   alignItems:"center ",
   justifyContent:"center",

  },



}))


const initialValues={
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    confirmpassword:'',
    checked:false,
    
}
const onSubmit = async (values,{resetForm}) => {
  console.log("values::", values)
   axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/users',
    data: values,
    headers: {'Content-Type': 'application/json' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

  resetForm()


}



 
const validationSchema = Yup.object().shape({
    firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required()
    .min(1),
    confirmpassword: Yup.string().required().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ) 
    }),
     checked: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions"),
 
  });
 


const Register =() =>{


  const formik = useFormik({
    initialValues ,
    onSubmit,
    validationSchema: validationSchema,
  
  });
 
const classes =useStyles();

 return(
 <>
     <Grid container sm={12}className={classes.ct} >
       
       <div >
       <h1>Register As Individual</h1><br/>
      <form onSubmit={formik.handleSubmit} autoComplete="on">
      <TextField 
          className="p-3"

          id="firstname"
          name="firstname"
          label="First Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.errors.firstname}
        />

        <TextField
        
          className="p-3"
          id="lastname"
          name="lastname"
          label="Last Name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        /><br/>
        <TextField
          className="p-3"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /><br />
        <TextField
          className="p-3"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        /><br />
           <TextField
          className="p-3"
          id="confirmpassword"
          name="confirmpassword"
          label="confirm Password"
          type="password"
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
        />
        <br />
          
          <Checkbox
            label="checkbox"
            error={formik.touched.checked && (formik.errors.checked)}
            values={formik.values.checked}
            helperText={formik.touched.checked && formik.errors.checked}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="checked"
            color="primary"
            unchecked
          />
         <label htmlfor="checked">I agree to the Terms and Conditions</label>
   
        
    
      <br/>
        
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
        <br />
      


      </form>


    </div>
    </Grid>
</>      
);
 };
 
  export default Register;