import React from 'react';
import { Movies } from './movies';
import '../App.css';
import axios from 'axios';

export class Read extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this); // bind
    } // can only pass data from parenbt to child - need to pass further grandparent to child

    // object state stores data
    state = {
        movies: []
    };

    //CORS policy blocked. browser stopped request (security) resource on different domain (3000/4000)- NEEDS FIXING
    //Server adjustment - install cors and package to allow access server.js (CORS policy)

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies') // retrieve data from server
            .then(response => {
                this.setState({ movies: response.data }) // furfilled path // search changed to mymovies
            })
            .catch(
                (error) => {
                    console.log(error); // statement executed if exception is thrown
                }
            );
    }// END componentDidMount

    ReloadData() { // reload data from database
        axios.get('http://localhost:4000/api/movies') // retrieve data from server
            .then(response => {
                this.setState({ movies: response.data }) // furfilled path // search changed to mymovies
            })
            .catch(
                (error) => {
                    console.log(error); // statement executed if exception is thrown
                }
            );
    } // END ReloadData

    /* render HTML*/
    render() {
        return (
            <div>
                <h3>Hello from Read Component</h3>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies> {/* passing object movies. // also passing method ReloadData down*/} 
            </div>
        );
    }
}// END class Read