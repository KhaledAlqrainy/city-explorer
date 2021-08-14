import React from 'react';
import WeatherDay from './WeatherDay';
import Container from 'react-bootstrap/Container';


class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.weatherData.map((weather) => {
                    return (
                    <WeatherDay weather={weather} />
                    )
                    return <Container >
                        Date: {weather.date}
                        Description : {weather.description}

                    </Container>
                })}
            </div>
        )
    }
}
export default Weather;