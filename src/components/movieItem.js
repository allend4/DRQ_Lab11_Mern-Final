import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button' // import button from bootstrap 
import axios from 'axios' // http client

export class MovieItem extends React.Component {

    constructor() {
        super(); // invoked super
        this.DeleteMovie = this.DeleteMovie.bind(this); // bind
    }

    DeleteMovie(e) { // delete method
        e.preventDefault(); // prevents getting fired everytime
        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id) // http request
            .then(() => { // callback function
                this.props.ReloadData(); // invoke
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>

                {/* basic html */}
                {/* <h3>{this.props.movie.Title}</h3> {/* js pulls title from movie object*/}
                {/* <p>{this.props.movie.Year}</p> {/* js pulls Year from movie object*/}
                {/* <img src={this.props.movie.Poster} width="200" height="300"></img> {/*js pulls poster from movie object */}

                {/* bootstrap card */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header> {/* props how you pass data from one comp to another */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="300" alt=" "></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );// END return
    }// END render
}// END class MovieItem