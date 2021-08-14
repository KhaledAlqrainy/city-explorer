import React from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Weather from './components/Weather'
import Movies from './components/Movies'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lon: '',
      lat: '',
      weather: [],
      movies: [],
      err: 'no response',
      showMap: false,
      showErr: false,
      showCards: false,
    }
  }

  explore = async (e) => {
    e.preventDefault();
    const cityName = e.target.city.value;
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_TOKEN}&q=${cityName}&format=json`;

    try {
      let locationResult = await axios.get(URL);
      this.setState({
        name: locationResult.data[0].display_name,
        lon: locationResult.data[0].lon,
        lat: locationResult.data[0].lat,
        showMap: true,
        showErr: false,
      })
    }
    catch { }
    try {
      const weather = await axios.get(`${process.env.REACT_APP_PORT}/weather?searchQuery=${cityName}&lat=${this.state.lat}&lon=${this.state.lon}`);
      this.setState({ weather: weather.data, showCards: true });
    }
    catch (error) {
      this.setState(
        {
          // showErr: true,
          // err: `Error: ${error.response.status}, ${error.response.data.error}`,
          // showCards: false,
        }
      )
    }
    const movies = await axios.get(`${process.env.REACT_APP_PORT}/movies?cityName=${cityName}`);
    this.setState({ movies: movies.data, showCards: true });
  }
  catch(error) {
    this.setState(
      {
        // showErr: true,
        // err: `Error: ${error.response.status}, ${error.response.data.error}`,
        // showCards: false,
      }
    );

  };

  
  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <h1>City Explorer</h1>
        <br />
        <h4>epolre weather and movie list for any city</h4> <br />
        <Form className onSubmit={this.explore}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter city name" name="city" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form><br />
        <div className="bg-secondary text-white p-1 text-center"><h5>Location Data</h5></div>
        <br />
        {
          this.state.showMap &&
          <img width="50%" style={{ maxHeight: "300px", marginLeft: '17rem' }} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_TOKEN}&center=${this.state.lat},${this.state.lon}`} alt='map' />
        }
        
        <Row>
          City name: {this.state.name}
          </Row> 

          <Row>
          Latitude : {this.state.lat}
          </Row> 

          <Row>
          Longitude :{this.state.lon}  
        </Row> 
        
        <div><h5>Weather Data</h5></div>

        <div>
          <Container>{this.state.showCards &&
            <Weather weatherData={this.state.weather} cityName={this.state.name} />}</Container>
        </div>
        

        <div><h5>Movies List</h5></div>

        <div>
          <Container>{this.state.showCards &&
            <Movies moviesData={this.state.movies} cityName={this.state.name} />}</Container><br /> <br /> <br />
        </div>
        <div className='bg-danger text-white text-center' style={{ fontSize: '25px' }}>{this.state.showErr ? <p>{this.state.err}</p> : ''}</div>
      </div >
    )
  }
}
export default App;