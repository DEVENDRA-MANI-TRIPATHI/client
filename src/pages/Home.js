import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import Card from '../components/Cards/homeCard.js';
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
import { StationContext } from '../context/StationContext.js'; // Import the StationContext

const Home = () => {
  const [sensors, setSensors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { selectedStation } = useContext(StationContext); // Consume the StationContext

  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (!selectedStation) return;

    const weatherStationRef = ref(database, selectedStation); // Use the selected station

    const fetchData = () => {
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
    };

    fetchData();
    return () => {
    };
  }, [selectedStation]);

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
  const windSpeedValue = Anemometer?.WindSpeed?.value;
  const windSpeedUnit = Anemometer?.WindSpeed?.unit;
  const visibilityValue = BH1750?.LightIntensity?.value;
  const visibilityUnit = BH1750?.LightIntensity?.unit;
  const pressureValue = BMP180?.Pressure?.value;
  const pressureUnit = BMP180?.Pressure?.unit;
  const uvIndexValue = UVSensor?.UVIndex?.value;
  const rainmeterValue = Rainsensor?.RainValue?.value;
  const rainmeterUnit = Rainsensor?.RainValue?.unit;

  return (
    <div className="container">
      <video className='background-video' src={Weatherbackground} autoPlay loop muted />
      <div className="left">
        <div className="left-top" onClick={()=> navigateToPage('/temp')}>
          <Card
            title="Weather"
            imageUrl={weather}
            imageClass={"card-temp-image"}
            values={[`${temperatureValue} ${temperatureUnit}`]}
            valueClass={"card-temp-value"}
            className="Home-temp"
          />
        </div>
         <div className="left-down" onClick={() => navigateToPage('/aqi')}>
          <Card
            title="AQI"
            imageUrl={Aqi}
            imageClass={"card-aqi-image"}
            values={[`${aqiValue}`]}
            valueClass={"card-aqi-value"}
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
              imageClass={"card-wind-image"}
              values={[`${windSpeedValue} ${windSpeedUnit}`]}
              valueClass={"card-wind-value"}
              className="custom-card-class"
            />
          </div>
          <div className="right-top-right">
            <Card
              title="Visibility"
              imageUrl={visibility}
              imageClass={"card-visibility-image"}
              values={[`${visibilityValue} ${visibilityUnit}`]}
              valueClass={"card-visibility-value"}
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
                imageClass={"card-Humidity-image"}
                values={[`${humidityValue} ${humidityUnit}`]}
                valueClass={"card-Humidity-value"}
              />
            </div>
            <div className="right-down-left-down">
              <Card
                title="Rainmeter"
                imageUrl={Rain}
                imageClass={"card-Rainmeter-image"}
                values={[`${rainmeterValue} ${rainmeterUnit}`]}
                valueClass={"card-Rainmeter-value"}
                className="custom-card-class"
              />
            </div>
          </div>
          <div className="right-down-right">
            <div className="right-down-right-left">
              <Card
                title="Pressure"
                imageUrl={atm}
                imageClass={"card-Pressure-image"}
                values={[`${pressureValue} ${pressureUnit}`]}
                valueClass={"card-Pressure-value"}
                className="custom-card-class"
              />
            </div>
            <div className="right-down-right-right">
              <Card
                title="UV Index"
                imageUrl={uv}
                imageClass={"card-uv-image"}
                values={[`${uvIndexValue}`]}
                valueClass={"card-uv-value"}
                className="custom-uv-class"
              />
            </div>
          </div> 
        </div>
      </div>   
    </div>
  );
};

export default Home;
