
import React from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      lon: '',
      lat:'',
      weather:[],
      map: false,
      error: 'Error',
      showCards: false,
      showerror: false,
      
    }
    }
  

    getcity = async(event) => {
      event.preventDefault();

      let cityName = event.target.city.value;
      let URL = `https://eu1.locationiq.com/v1/search.php?key=pk.e56f9184f2bb5f9bd6bedd3ad7f66181&q=${cityName}&format=json`;

      try {
        let location = await axios.get(URL);

        this.setState({
          cityname: location.data[0].display_name,
          lon: location.data[0].lon,
          lat: location.data[0].lat,
          map: true,
          showerror:false,
        })


        // http://localhost:3001/weather?city_name=amman
        
        const weather = await axios.get(`http://localhost:3001/weather?city_name=${cityName}`);

        this.setState({
          weather: weather.data, showCards: true
        });
      }

      catch (eror) {

        this.setState({
          showerror: true,
          error: `Error: ${eror.response.status},${eror.response.data.eror}`,
          showCards: false      
        })
      }
    }
  


  render() {
    return (
      <>
      <h1>City Explorer</h1>
      <form onSubmit={this.getcity}>
        <input type='text' placeholder='Enter City' name='city' />
        <button type='submit'>Search</button>
      </form>

        

        


      {/* { 
       this.state.showerror && 
       this.state.error 
      } */}
       <p>
         City : {this.state.cityname}
       </p>

       <p>
         Longitude : {this.state.lon}
       </p>

       <p>
         Latiude : {this.state.lat}
       </p>

       <Container>{this.state.showCards &&
          <Weather weatherdata={this.state.weather} cityName={this.state.name} />}</Container>

         {
           this.state.map &&
           <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.e56f9184f2bb5f9bd6bedd3ad7f66181&center=${this.state.lat},${this.state.lon}`} alt ='map'/>
         }
         
       
       
      </>
    )
  }
}

export default App;
