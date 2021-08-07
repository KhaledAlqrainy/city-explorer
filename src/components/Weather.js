import React from 'react';
import Card from 'react-bootstrap/Card';
class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.weatherData.map((weather) => {
                    return <Card style={{ width: '15rem', float: 'right', margin: '1rem 3.8rem' }} className="text-center mb-3 bg-info">
                        <Card.Title className="p-3 text-white">Date: {weather.date}</Card.Title>
                        <Card.Body>
                            {weather.description}
                        </Card.Body>
                    </Card>
                })}
            </div>
        )
    }
}
export default Weather;