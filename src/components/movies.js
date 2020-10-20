import React from 'react';
import '../App.css';
import { MovieItem } from './movieItem';

export class Movies extends React.Component{

    render(){
        return this.props.movies.map((movie) =>{ //pulls array apart to create movie objects
            return <MovieItem movie={movie}></MovieItem>
        });
            //<div>
            //   <h3>Hello from Movies Component</h3>
            //    <MovieItem></MovieItem>
            //</div>
    }

}