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
                
            </div>
        )
    }
}
export default Movies;