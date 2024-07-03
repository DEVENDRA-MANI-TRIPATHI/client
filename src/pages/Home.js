import React, { useEffect, useState } from 'react';
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import Card from './Card.js';
import '../styles/Home.css';
import weather from '../components/Images/weather.png';
import Aqi from '../components/Images/Fresh AQI.png';
import HumidityImg from '../components/Images/Very Humid.png';
import Rain from '../components/Images/rain meter.png';
import wind from '../components/Images/wind.png';
import uv from '../components/Images/Uv.png';
import visibility from '../components/Images/visibility.png';
import atm from '../components/Images/atm.png';
import Weatherbackground from '../components/Images/new.webm';

const Home = () => {
  const [sensors, setSensors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const weatherStationRef = ref(database, 'Weather-station-testing');
    onValue(
      weatherStationRef,
      (snapshot) => {
        const data = snapshot.val();
        setSensors(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const {
    DHT11,
    MQ135,
    Anemometer,
    BH1750,
    BMP180,
    UVSensor,
    Rainsensor,
  } = sensors || {};

  const temperatureValue = DHT11?.Temperature?.value;
  const temperatureUnit = DHT11?.Temperature?.unit;
  const humidityValue = DHT11?.Humidity?.value;
  const humidityUnit = DHT11?.Humidity?.unit;
  const aqiValue = MQ135?.AirQuality?.value;
  const aqiUnit = MQ135?.AirQuality?.unit;
  const windSpeedValue = Anemometer?.WindSpeed?.value;
  const windSpeedUnit = Anemometer?.WindSpeed?.unit;
  const visibilityValue = BH1750?.LightIntensity?.value;
  const visibilityUnit = BH1750?.LightIntensity?.unit;
  const pressureValue = BMP180?.Pressure?.value;
  const pressureUnit = BMP180?.Pressure?.unit;
  const uvIndexValue = UVSensor?.UVIndex?.value;
  const uvIndexUnit = UVSensor?.UVIndex?.unit;
  const rainmeterValue = Rainsensor?.RainValue?.value;
  const rainmeterUnit = Rainsensor?.RainValue?.unit;

  return (
    <div className="container">
      <video className='background-video' src={Weatherbackground} autoPlay loop muted />
      <div className="left">
        <div className="left-top">
          <Card
            title="Weather"
            imageUrl={weather}
            imageStyle={{ width: '100%', margin: 'auto' }}
            values={[`${temperatureValue} ${temperatureUnit}`]}
            valueStyles={[{ color: 'white', fontSize: '34px', margin: '100px' }]}
            className="Home-temp"
          />
        </div>
        <div className="left-down">
          <Card
            title="AQI"
            imageUrl={Aqi}
            imageStyle={{ width: '50%', margin: '0 auto' }}
            values={[`${aqiValue}`]}
            valueStyles={[{ color: 'white', fontSize: '45px', margin: '130px' }]}
            className="custom-card-class"
          />
        </div>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="right-top-left">
            <Card
              title="Wind speed"
              imageUrl={wind}
              imageStyle={{ width: '90%', margin: '5px',position:'relative',top:'120px' }}
              values={[`${windSpeedValue} ${windSpeedUnit}`]}
              valueStyles={[{ color: 'white', fontSize: '34px', position:'relative',top:'-110px',left:'240px' }]}
              className="custom-card-class"
            />
          </div>
          <div className="right-top-right">
            <Card
              title="Visibility"
              imageUrl={visibility}
              imageStyle={{ width: '90%', margin: 'auto',position:'relative',top:'100px' }}
              values={[`${visibilityValue} ${visibilityUnit}`]}
              valueStyles={[{ color: 'white', fontSize: '34px',position:'relative',top:'-120px',left:'300px' }]}
              className="custom-card-class"
            />
          </div>
        </div>
        <div className="right-down">
          <div className="right-down-left">
            <div className="right-down-left-top">
              <Card
                title="Humidity"
                imageUrl={HumidityImg}
                imageStyle={{ width: '40%', margin: 'auto' }}
                values={[`${humidityValue} ${humidityUnit}`]}
                valueStyles={[{color: 'white', fontSize: '34px',position:'relative',top:'-190px',left:'300px'  }]}
              />
            </div>
            <div className="right-down-left-down">
              <Card
                title="Rainmeter"
                imageUrl={Rain}
                imageStyle={{ width: '30%', margin: 'auto' }}
                values={[`${rainmeterValue} ${rainmeterUnit}`]}
                valueStyles={[{ color: 'white', fontSize: '34px', margin: '20px' }]}
                className="custom-card-class"
              />
            </div>
          </div>
          <div className="right-down-right">
            <div className="right-down-right-left">
              <Card
                title="Pressure"
                imageUrl={atm}
                imageStyle={{ width: '90%', margin: 'auto',position:'relative',top:'90px' }}
                values={[`${pressureValue} ${pressureUnit}`]}
                valueStyles={[{ color: 'white', fontSize: '34px', position:'relative',left:'70px',top:'-70px' }]}
                className="custom-card-class"
              />
            </div>
            <div className="right-down-right-right">
              <Card
                title="UV Index"
                imageUrl={uv}
                imageStyle={{ width: '16%', margin: 'auto' }}
                values={[`${uvIndexValue}`]}
                valueStyles={[{ color: 'white', fontSize: '30px',margin:'30px' }]}
                className="custom-card-class"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;