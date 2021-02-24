import React,{useEffect,useState} from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios'
import Cards from './Cards'
import {Select,MenuItem} from '@material-ui/core'
function Home() {
    const [state, setState] = useState([])
    const [stateAge, setAgestate] = useState()



  const HandleChange =(event) =>{
    setAgestate(event.target.value)
  }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/`,{
        params: {
            _limit: 5
           }})
        .then(res => { console.log(res.data);
         setState(res.data)
    
      
    } 
      )
      .catch(error => {console.log(error)})
      
      
    }, []);

  function ncard(val) {
return (
    <Cards name={val.name} id={val.id} email={val.email} body={val.body} />
)
  }
    
    
    return (
        <div>
            <h1>home</h1>
            <h2>     
       <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={stateAge}
          onChange={HandleChange}
          
        >
         <MenuItem value="">
           <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select><br/>         
            <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={HandleChange}
          value={stateAge}
        >
         <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={stateAge}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </h2>
         
       {(state)?<>{state.map(ncard)}</>:null}
         
        
     </div>
    )
}

export default Home
