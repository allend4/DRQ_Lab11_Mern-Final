import React from 'react';
import { Movies } from './movies';
import '../App.css';
import axios from 'axios';

export class Read extends React.Component{

    // obect state stores data
    state = { 
        movies:[]            
    };

    //CORS policy blocked. browser stopped request (security) resource on different domain (3000/4000)- NEEDS FIXING
    //Server adjustment - install cors and package to allow access server.js (CORS policy)

    componentDidMount(){
    axios.get('http://localhost:4000/api/movies') // retrieve data from server
        .then(response => {
            this.setState({movies: response.data}) // furfilled path // search changed to mymovies
        })
        .catch(
            (error) => {
                console.log(error); // statement executed if exception is thrown
            }
        );
    }// END componentDidMount

    /* render HTML*/
    render(){
        return(
            <div>
                <h3>Hello from Read Component</h3>
                <Movies movies={this.state.movies}></Movies> {/* passing object movies. */}
            </div>
        );
    }
}// END class Read