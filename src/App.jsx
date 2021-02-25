import React from 'react'
import {getHomeList, getMovieInfo} from './hub'
import MoviesRow from './components/movies-row/MoviesRow'
import Emphasis from './components/emphasis/Emphasis'
import Header from './components/header/Header'

import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      moviesList: [],
      emphasisMovie: null
    }
  }

  componentDidMount() {
    //get all movies list to home page
    const loadAll = async () => {
      let moviesList = await getHomeList();

      this.setState({moviesList})
      this.chooseRandomMovie()
    }

    loadAll();
  }


  chooseRandomMovie = async () => {
    let originals = this.state.moviesList.filter(i=> i.slug === 'originals');
    let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randonChosen]
    let chosenInfo = await getMovieInfo(chosen.id, 'tv');
    this.setState({emphasisMovie: chosenInfo});
  }

  render(){
    const {moviesList, emphasisMovie} = this.state;

    return(
      <div className="page">
        <Header />

        {emphasisMovie && 
          <Emphasis emphasisMovie={emphasisMovie}/> 
        }

        <section className="lists">          
          {moviesList?.map((item, key) => (
            <div>
              <MoviesRow title={item.title} movies={item.items} key={key} />
            </div>
  
          ))}
  
        </section>

        <footer>
          Reproduçao feita com direitos de imagens da Netflix.<br/>
          Dados Extraidos de https://www.themoviedb.org/
        </footer>
      </div>
    )
  }
}

export default App;


