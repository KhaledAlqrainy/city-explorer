import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Movies extends React.Component {
    render() {

        return (
            <div>
                {this.props.moviesData.map((movie) => {
                    return <Card style={{ width: '60%', float: 'right', margin: '2rem 14rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
                        <Card.Title className="p-3 text-white">Title: {movie.title}</Card.Title>
                        <ListGroupItem>
                            <Card.Img style={{ height: '20rem' }} src={movie.poster_path} fluid={true} alt="No image for this movie" />
                        </ListGroupItem>
                        <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                            {movie.overview}
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Released On:{' '}
                                <span>
                                    {movie.release_date}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Popularity:{' '}
                                <span>
                                    {movie.popularity}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Average Votes:{' '}
                                <span >
                                    {movie.vote_average}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Votes Count:{' '}
                                <span >
                                    {movie.vote_count}
                                </span>
                            </ListGroupItem>

                        </ListGroup>
                    </Card>
                })}
            </div>
        )
    }
}
export default Movies;