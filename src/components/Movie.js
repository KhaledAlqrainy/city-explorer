import React from 'react';
import { Container } from 'react-bootstrap';



class Movie extends React.Component {

    render() {

        return (
            <div>
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
export default Movie;