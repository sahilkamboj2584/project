import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage'
import Header from './Header'
import { Button } from '@material-ui/core';
import Spinner from 'react-bootstrap/Spinner'
import { MDBDataTable } from 'mdbreact';
import axios from 'axios'

function LoginMainPage() {
const [Loading, setLoading] = useState(false)
    
  const [DataTable,setDataTable] = useState([])

  const DataLogin= {
    email:"admin@gmail.com",
    password:"1"
}
useEffect(() => {
 
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => { console.log(res.data);
      let data = res.data;
      setDataTable(data);
      setLoading(true);
    } 
      )
    .catch(error => {console.log(error)})
    

 
},[]);

  const Data = {
      columns: [
        {
          label: 'name',
          field: 'name',
          sort: 'asc',
          width: 110
        }, {
            label: 'email',
            field: 'email',
            sort: 'asc',
            width: 110
          },
      
      ],
      rows: DataTable 

    }

const Login =(state) =>{
    if(state.email==DataLogin.email && state.password==DataLogin.password){
        console.log(state)
        setstate(
           { email:state.email}
        )
    }else {
        console.log("error")
    }


}
const Logout= () =>{
    setstate({email:"", password:""})
}

const [state1, setstate] = useState({email:"", password:""})

    return (
        <div>
        { state1.email != "" ? (<><div><h1>welcome {state1.email}</h1>
         <Button style={{color: "red"}} color="secondary" onClick={Logout}>logout</Button> 
       { Loading ? (  <MDBDataTable
        striped
        bordered
        small
        data={Data}
/>
       )  :( <Spinner animation="border" variant="warning" />  )  }  
        </div></>)
        : ( <LoginPage Login={Login} />) }
        </div>
    )
}

export default LoginMainPage
