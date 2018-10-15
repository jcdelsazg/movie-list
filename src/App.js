import React, { Component } from 'react';
import logo from './logo.svg';
import * as classes from './App.css';
import Input from './components/UI/Input/Input';
import Image from './components/Image/Image';
import MovieList from './components/MovieList/MovieList';
import * as utilities from './Utility/Utility';

const CATEGORIES = ["abstract", "animals", "business","cats", "city", "food", "nature", "sports", "people", "technics", "fashion", "transport"];

const API_KEY = 'eb336b6b';

class App extends Component {
  state={
      searchImgValue: 0,
      isValidSearchNumber: true,
      showMessage: false,
      searchMovieValue: '',
      resultSearchMovies: [],
      searchMovieUsed: false 
  };

  resetButtonHandler = (event) => {
    const updateState = {...this.state};
    updateState.searchImgValue = 0;
    updateState.isValidSearchNumber = true;
    updateState.showMessage = false;

    this.setState({
      searchImgValue: updateState.searchImgValue,
      isValidSearchNumber: updateState.isValidSearchNumber,
      showMessage: updateState.showMessage
    });    
  }

  inputImgChangedHandler = (event) => {
    const updateState = {...this.state};
    const number = +event.target.value;

    if (utilities.validateNumber(number)) {
      updateState.searchImgValue = utilities.setNumberValue(number);
      updateState.showMessage = utilities.setShowMessageValue(number);
      updateState.isValidSearchNumber = true;
    } else {
      updateState.isValidSearchNumber = false;
      updateState.searchImgValue = 0;
    }
    
    this.setState({
      searchImgValue: updateState.searchImgValue,
      isValidSearchNumber: updateState.isValidSearchNumber,
      showMessage: updateState.showMessage
    });
  }
  
  inputMovieChangedHandler = (event) => {
    const updateState = {...this.state};
    updateState.searchMovieValue = event.target.value;
    this.setState({searchMovieValue: updateState.searchMovieValue});
  }

  searchMovieHandler = () => {
    console.log(this.state.searchMovieValue);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.searchMovieValue}`)
    .then(res => res.json())
    .then(results => {
        console.log(results.Search);
        const updateState = {...this.state};
        updateState.resultSearchMovies = results.Search === undefined ? [] : results.Search; 
        this.setState({resultSearchMovies: updateState.resultSearchMovies, searchMovieUsed: true});
    });
  }
  
  render() {
    const showInputGreatest100 = this.state.showMessage ? <p className={classes.Error}> The maximum value is 100 </p> : null;
    
    const inputValue = this.state.searchImgValue;

    const isValidSearch = this.state.isValidSearchNumber 
      ? 
        <div>
          { showInputGreatest100 }
          {[...Array(inputValue)].map((_, i) =>
              <Image key={i} url={"http://lorempixel.com/200/200/"+ CATEGORIES[Math.floor((Math.random() * 11) + 1)] +"?t=" + Date.now() + i} alt={"image" + i} />
          )} 
        </div> 
      : <div className={classes.Error}>Only numbers are allowed</div>;
    
    const inputSearchNumbers = <Input 
                                label="Search Numbers"
                                configuration={{
                                  type: 'text',
                                  placeholder: 'Introduce a Number'
                                }} 
                                changed={(event) => this.inputImgChangedHandler(event)}
                                value={this.state.searchImgValue}
                                clicked={this.resetButtonHandler}
                                buttonText="Reset"
                              />;
    const inputSearchMovies = <Input 
                                label="Search your favorite Movie"
                                configuration={{
                                  type: 'text',
                                  placeholder: 'Search a movie'
                                }} 
                                changed={(event) => this.inputMovieChangedHandler(event)}
                                value={this.state.searchMovieValue}
                                clicked={this.searchMovieHandler}
                                buttonText="Search"
                              />;
      
    const movieListSearched = this.state.resultSearchMovies.length > 0 
                                ? <MovieList movies={this.state.resultSearchMovies} />
                                :  <div className={classes.Error}>No results</div>;
                                
      
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>React Exercise</h1>
        </header>
        <div className={classes.AppIntro}>
          { inputSearchNumbers }
          { isValidSearch }
          { inputSearchMovies }
          { this.state.searchMovieUsed ? movieListSearched : null }
        </div>
      </div>
    );
  }
}

export default App;
