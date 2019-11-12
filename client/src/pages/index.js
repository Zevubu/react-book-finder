import React,{Component} from "react";
import { toast } from "react-toastify";
import Book from "../components/Book";
import Searchform from "../components/SearchForm";
import { List } from "../components/List"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            books:[],
            q: "",
            message: "Search for a book here!"
        }
    };

    render(){
        return(
            <div>
                <p>hello! there
                    
                </p>
            </div>
        )
    }



}

export default Home;