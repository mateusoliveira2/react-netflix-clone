import React from 'react';
import './Emphasis.css';


class Emphasis extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genres: [],
          
        }
    }

    componentDidMount(){

        let genres = [];
        for(let i in this.props.emphasisMovie.genres){
            genres.push(this.props.emphasisMovie.genres[i].name);
        }

        this.setState({genres})


    }


    render(){
        const movie = this.props.emphasisMovie;
        const genres = this.state.genres;


        return(
            <section className="emphasis"
                style= {{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}>
                <div className= "emphasis--vertical">
                    <div className= "emphasis--horizontal">
                        <div className= "emphasis--name">
                            {movie.original_name}
                        </div>

                        <div className= "emphasis--info">
                            <div className= "emphasis--points"> {movie.vote_average} pontos </div>

                            <div className= "emphasis--year"> {new Date(movie.first_air_date).getFullYear()} </div>

                            <div className= "emphasis--seasons"> 
                                {movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''} 
                            </div>
                        </div>

                        <div className= "emphasis--description"> {movie.overview} </div>
                        
                        <div className= "emphasis--buttons">
                            <a href={`/watch/${movie.id}`} className="emphasis--watchbutton">► Assistir</a>
                            <a href={`/list/add/${movie.id}`} className="emphasis--mylistbutton">+ Minha Lista</a>
                        </div>

                        <div className= "emphasis--genres">
                            <strong>Gêneros: {genres.join(', ')} </strong>
                        </div>

                    </div>
                    
                </div>

            </section>
        )
    }
}

export default Emphasis;