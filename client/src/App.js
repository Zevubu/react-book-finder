import React,{Component} from "react";
import {ToastContainer} from "react-toastify";
import { BrowserRouter as Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/index';
import Saved from "./pages/saved";
import NotFound from "./pages/notFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component{
    render(){
      return(
        <React.Fragment>
        <ToastContainer />
        <section className="hero-is-fullheight">
          <div className="head-head">
            <NavBar />
          </div>
          <div className="head-body">
            <Switch>
              <Route path="/search" component={Home} />
              <Route path="/saved" component={Saved} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/search" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <div className="head-foot">
            <Footer />
          </div>
        </section>
      </React.Fragment>
      )
    }
   
}
  
export default App;