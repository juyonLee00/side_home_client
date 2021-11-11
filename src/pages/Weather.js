import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0, dexc: '', icon: '', loading: true };
  }

  componenetDidMount() {
    const cityName = 'Seoul';
    const apiKey = 'f2dd782c31b72901ba31232c2a938193';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        this.setState({
          temp: data.main.temp,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const imgSrc = `https://openweathermap.com/img/w/${this.state.icon}.png`;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div className="App">
          <img src={imgSrc} />
          <p>{this.state.temp}</p>
          <p>{this.state.desc}</p>
        </div>
      );
    }
  }
}

export default Weather;
