import React from 'react';
import '../App.css';

export class Create extends React.Component{

    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    onChangeMovieName(e){
        this.setState({Title: e.target.value}); //update method and invoke state
    }

    onChangeMovieYear(e){
        this.setState({Year: e.target.value});
    }

    onChangeMoviePoster(e){
        this.setState({Poster: e.target.value});
    }

    onSubmit(){
        alert('Movie added' 
        + '\ntitle:  ' + this.state.Title
        + '\nYear: ' + this.state.Year 
        + '\nPoster: ' + this.state.Poster);
    }

    render(){
        return(
            <div>
                <h3>Hello from create component</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Please add movie title</label>
                        <input type="text" className="form-control" value={this.state.Title} onChange={this.onChangeMovieName}></input>
                    </div>

                    <div className="form-group">
                        <label>Please add movie year</label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeMovieYear}></input>
                    </div>
                
                    <div className="form-group">
                        <label>Please add movie poster</label>
                        <input type="text" className="form-control" value={this.state.Poster} onChange={this.onChangeMoviePoster}></input>
                    </div>

                    <input type="submit" value="Add Movie"></input>
                </form>
            </div>
        );
    }

}