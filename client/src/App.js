import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';

class App extends Component{
    render(){
      return(
        <Home />
      )
    }
   
}
  
export default App;