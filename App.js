import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { moviesData } from './moviesData.js';
import MovieItem from './MovieItem.js'

console.log(moviesData); 



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
    console.log("constructor")
  }

 /* componentDidMount() {
    console.log("didMount")    
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397").then((response) => {
      console.log("then", response)
      return response.json()
    }).then((data) => {
        console.log("data", data)
        this.setState({
          movies: data.results
        })
    })  
  }*/

  removeMovie = movie => {
   const updateMovies = this.state.movies.filter(function(item) {
    return item.id !== movie.id;
   });
   console.log(updateMovies);
   /*this.state.movies = updateMovies;*/
   this.setState({
    movies: updateMovies
   });
  };

  addMovieToWillWatch = movie => {
    console.log(movie);
    
    const updatemoviesWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updatemoviesWillWatch
    });   
 };

 removeMovieFromWillWatch = movie => {
   const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
    return item.id !== movie.id;
   });
   
   this.setState({
    moviesWillWatch: updateMoviesWillWatch
   });
  };

  render() {
    console.log("render", this.state);
    return (
     <div className="container">
      <div className="row">
       <div className="col-9 mt-4">
        <div className="row">
        {this.state.movies.map(movie => {
          return (
          <div className="col-6 mb-4" key={movie.id}>  
          <MovieItem  
          movie={movie} 
          removeMovie={this.removeMovie} 
          addMovieToWillWatch={this.addMovieToWillWatch}
          removeMovieFromWillWatch={this.removeMovieFromWillWatch}
          />
          </div>  
          );         
         })}
        </div> 
        </div>
        <div className="col-3">
         <p>Will Watch: {this.state.moviesWillWatch.length}</p>
        </div>
       </div>
      </div>
      );
     }
   }



export default App;
