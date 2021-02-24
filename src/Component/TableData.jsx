import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const TableData =() => {

 


const [state, setstate] = useState([]);
const [search, setSearch] = useState("");


const ASC = 'ascending';
const DSC = 'descending';


const SortingData = () =>{
  

    console.log(state.sort((a, b) => sortByText(a, b, ASC)))
   
  
}




function sortByText(a, b, order = ASC) {
    const diff = a.name.toLowerCase().localeCompare(b.name.toLowerCase());

    if (order === ASC) {
        return diff;
    }

    return -1 * diff;
}


// console.log(state.sort((a, b) => sortByText(a, b, ASC)))



const Change=(event) => {
   setSearch(event.target.value)
 
 

};


useEffect(() => {
    
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => { console.log(res.data);
        let data = res.data;
        setstate(data);} )
      .catch(error => {console.log(error)})
    
      
   
  },[]);




return (
<>

      <h1 className="text-center"> User Data</h1><br />
        <TextField id="outlined-basic" label="Search" variant="outlined" onChange={Change}/>
        <br /> <br />
        <Button  onClick={SortingData}>sorting</Button>
       
<table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">street</th>
    </tr>
  </thead>
  <tbody>

     { state.filter((val) => {

    
    if(search==""){
        return val
    }else if(val.name.toLowerCase().includes(search.toLowerCase())){
       return val
    }else if(val.email.toLowerCase().includes(search.toLowerCase())){
       return val
    }else if(val.phone.toLowerCase().includes(search.toLowerCase())){
       return val
    }else if(val.address.street.toLowerCase().includes(search.toLowerCase())){
       return val
    }else if(val.id==search){
      return val
   }
   
     
}).map((val)=>{
     return (<tr>
         <th scope="row">{val.id}</th>
         <td>{val.name}</td>
         <td>{val.email}</td>
         <td>{val.phone}</td>
         <td>{val.address.street}</td>
         
       </tr>
       )

      })}
    
   
  </tbody>
</table>
</>
);

};


export default TableData;