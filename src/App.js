
import './App.css';
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Route} from "react-router-dom";
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import LoginMainPage from './Component/LoginMainPage';
import Register from './Component/Register';
import RegisterAs from './Component/RegisterAs';

function App() {
  return (
   <>
   <Router>
   <Header/>
     <Switch>
      
        <Route exact path="/" component={Home} />
        <Route  path="/About" component={Aboutus} />
        <Route  path="/Login" component={LoginMainPage} />
        <Route  path="/Registeras" component={RegisterAs} />
        <Route  path="/register" component={Register} />
         
        </Switch>
  
   </Router>
   </>
   
  );
}

export default App;
