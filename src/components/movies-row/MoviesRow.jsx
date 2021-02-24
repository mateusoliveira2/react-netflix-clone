import React from 'react';
import './MoviesRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class MoviesRow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollX: 0
        }
    }

    render(){

        const handleLeftArrow = () => {
            let x = this.state.scrollX + Math.round(window.innerWidth / 2);
            if(x > 0){
                x = 0;
            }

            this.setState({scrollX: x})
        }

        const handleRightArrow = () =>{
            let x = this.state.scrollX - Math.round(window.innerWidth / 2);
            let listW = this.props.movies?.results?.length * 150;
            
            if(window.innerWidth - listW > x){
                x = (window.innerWidth - listW) - 60;
            }

            this.setState({scrollX: x})
        }

        return(
            <div className="movieRow">
            <h2>{this.props.title}</h2>

            <div className="movieRow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}} />
            </div>
            <div className="movieRow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}} />
            </div> 
            
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: this.state.scrollX, width: this.props.movies.results.length * 150}}>
                    {this.props.movies?.results?.length > 0 && this.props.movies?.results?.map((item, key)=>(
                        <div key={key} className="movieRow--item">    
                            <img alt="list of films" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    
        )
    }
}

export default MoviesRow;
