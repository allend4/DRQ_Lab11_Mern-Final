import React from 'react';
import '../App.css';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{

    render(){
        return this.props.movies.map((movie) =>{ // pulls array (collection )apart to create movie objects
            return <MovieItem Key={movie.imdbID} movie={movie}></MovieItem> // MovieItem for each movie and pass data
        });
            //<div>
            //   <h3>Hello from Movies Component</h3>
            //    <MovieItem></MovieItem>
            //</div>
    } // END render
}// END class Movies