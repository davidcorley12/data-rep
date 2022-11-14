import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{
    
    {/*Pulls the information stored in JSON data on the server and posts that to our read component*/}
    
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books:response.data.myBooks})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        books:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
