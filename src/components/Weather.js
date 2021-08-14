import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.weatherData.map((weather) => {
                    return (
                    <WeatherDay weather={weather} />
                    )
                })}
            </div>
        )
    }
}
export default Weather;