import React from 'react';
import { Container } from 'react-bootstrap';

import Movie from "./Movie";

class Movies extends React.Component {
    render() {

        return (
            <div>
                
                    {this.props.moviesData.length && <h2>Movies Related To The City</h2>}
                    
                    <Container className="d-flex flex-wrap justify-content-center">
                        {this.props.moviesData.map(movieObj => {
                            return (
                                <Movie moviesData={movieObj} />
                            );
                        })}
                    </Container>
                
                {this.props.moviesData.map((movie) => {
                    return (
                    
                
                    <Container >
                        Title: {movie.title}
                        Overview : {movie.overview}
                        Release Date :{movie.release_date}
                        Popularity : {movie.popularity}
                        Vote Average : {movie.vote_average}
                        Vote Count : {movie.vote_count}



                    </Container>
              
            
                    )
           
                })}
            </div>
        )
    }
}
export default Movies;