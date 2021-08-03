import './App.css'
import React from 'react';
import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      lon: '',
      lat:'',
      map: false,
      error: 'Error',
      showerror: false
    }
    }
  

    getcity = async(event) => {
      event.preventDefault();

      let cityName = event.target.city.value;
      let URL = `https://eu1.locationiq.com/v1/search.php?key=pk.e56f9184f2bb5f9bd6bedd3ad7f66181&q=${cityName}&format=json`;

      try {
        let location = await axios.get(URL);

        this.setState({
          displayName: location.data[0].display_name,
          lon: location.data[0].lon,
          lat: location.data[0].lat,
          map: true
        })
      }

      catch {

        this.setState({
          displaymap: false,
          error: true,
        })
      }
    }
  


  render() {
    return (
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.getcity}>
        <input type='text' placeholder='Enter City' name='city' />
        <button type='submit'>Get Location</button>
      </form>
        {/* <Form onSubmit={this.getcity}>
            <Form.Control type="text" placeholder="Enter city" name='city' />
            
          <Button variant="primary" type="submit">
            Get Location
          </Button>
        </Form> */}

        <p>{this.state.cityname}</p>

        {
          this.state.map &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.e56f9184f2bb5f9bd6bedd3ad7f66181&center=${this.state.lat},${this.state.lon}`} alt ='map'/>
        }

      { 
       this.state.showerror && 
       this.state.error 
       }
      </>
    )
  }
}

export default App;
