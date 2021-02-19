import React,{useState} from 'react'
import LoginPage from './LoginPage'
import Header from './Header'

function LoginMainPage() {

const Data= {
    email:"admin@gmail.com",
    password:"123456"
}


const Login =(state) =>{
    if(state.email==Data.email && state.password==Data.password){
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
        { state1.email != "" ? (<><div><h1>welcome{state1.email}</h1>   
        <button onClick={Logout}>logout</button> 
        </div></>)
        : ( <LoginPage Login={Login} />) }
        </div>
    )
}

export default LoginMainPage
