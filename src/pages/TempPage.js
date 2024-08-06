import React, { useEffect, useState,useContext } from 'react';
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import WeatherCard from '../components/Cards/tempCard.js';
import '../styles/tempPage.css';
import tempimg from '../components/Images/weather.png';
import tempimg1 from '../components/Images/vecteezy_cold-temperature-illustration-design_34962392.png';
import Weatherbackground from '../components/Images/new.webm';
import { StationContext } from '../context/StationContext.js'; // Import the StationContext

const getCurrentDate = () => {
    const today = new Date();
    const options = { month: 'short', day: '2-digit' };
    return today.toLocaleDateString('en-US', options).toUpperCase();
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options).toUpperCase();
};

const formatTemperature = (value) => `${value}°C`;  // Adjust the unit as per your requirement (°C or °F)
const formatHumidity = (value) => `${value}%`;
const formatValue = (value, unit) => `${value} ${unit}`;


const TempPage = () => {
    const [sensors, setSensors] = useState(null);
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedStation } = useContext(StationContext);

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
    
    useEffect(() => {
        if (!selectedStation) return;

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/weather-data/station/${selectedStation}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                console.log("Fetched weather data:", data); // Log fetched weather data
                
                const entries = Object.entries(data).map(([date, details]) => ({
                    date,
                    DHT11: details.DHT11,
                }));

                setWeatherData(entries);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [selectedStation]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    const {
        DHT11,
    } = sensors || {};

    const temperatureValue = DHT11?.Temperature?.value;
    const temperatureUnit = DHT11?.Temperature?.unit;
    const humidityValue = DHT11?.Humidity?.value;
    const humidityUnit = DHT11?.Humidity?.unit;

    const additionalWeatherData = weatherData.slice(-6).reverse();

     // Calculate min, max, and avg temperature and humidity
     const temperatures = additionalWeatherData.map(dayData => dayData.DHT11?.Temperature?.value || 0);
     const humidities = additionalWeatherData.map(dayData => dayData.DHT11?.Humidity?.value || 0);
 
     const maxTemperature = Math.max(...temperatures);
     const minTemperature = Math.min(...temperatures);
     const avgTemperature = (temperatures.reduce((sum, value) => sum + value, 0) / temperatures.length) || 0;
 
     const maxHumidity = Math.max(...humidities);
     const minHumidity = Math.min(...humidities);
    const avgHumidity = (humidities.reduce((sum, value) => sum + value, 0) / humidities.length) || 0;

      // Get dates for max and min values
      const maxTempDate = formatDate(additionalWeatherData.find(dayData => dayData.DHT11?.Temperature?.value === maxTemperature)?.date || '');
      const minTempDate = formatDate(additionalWeatherData.find(dayData => dayData.DHT11?.Temperature?.value === minTemperature)?.date || '');
      
      // Get dates for max and min humidity
      const maxHumidityDate = formatDate(additionalWeatherData.find(dayData => dayData.DHT11?.Humidity?.value === maxHumidity)?.date || '');
      const minHumidityDate = formatDate(additionalWeatherData.find(dayData => dayData.DHT11?.Humidity?.value === minHumidity)?.date || '');

    return (
        <div className="temp-container">
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='top-temp-container'>
            <WeatherCard
                    imageSrc={tempimg}
                    imageClass={"day0"}
                    // day="TODAY"
                    date={getCurrentDate()}
                    temperature={formatTemperature(temperatureValue)}
                    // condition="PARTLY CLOUDY"
                    humidity={formatHumidity(humidityValue)}
                    style={"day0-card-style"}
                />
                 {additionalWeatherData.map((dayData, index) => {
                    // Check if DHT11 data is available for this day
                    const temperature = dayData.DHT11?.Temperature?.value;
                    const humidity = dayData.DHT11?.Humidity?.value;

                    // Log data for each day card
                    console.log(`Day ${index + 1} - Date: ${dayData.date}, Temperature: ${temperature}, Humidity: ${humidity}`);

                    return (
                        <WeatherCard
                            key={index}
                            imageSrc={tempimg1}
                            imageClass={"day1"}
                            date={formatDate(dayData.date)}
                            temperature={formatValue(temperature, "°C")} // Display the temperature
                            humidity={formatValue(humidity, "%")} // Display humidity
                            style={"day-card-style"}
                        />
                    );
                })}
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br />TEMPERATURE</div>
                        <div class="tempcard-date">{maxTempDate}</div>
                        <div class="tempcard-value">{formatTemperature(maxTemperature)}</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br />TEMPERATURE</div>
                        <div class="tempcard-date">{minTempDate}</div>
                        <div class="tempcard-value">{formatTemperature(minTemperature)}</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br />TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">{formatTemperature(avgTemperature.toFixed(2))}</div>
                    </div>
                </div>
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br />HUMIDITY</div>
                        <div class="tempcard-date">{maxHumidityDate}</div>
                        <div class="tempcard-value">{formatHumidity(maxHumidity)}</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br />HUMIDITY</div>
                        <div class="tempcard-date">{minHumidityDate}</div>
                        <div class="tempcard-value">{formatHumidity(minHumidity)}</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br />HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">{formatHumidity(avgHumidity.toFixed(2))}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TempPage;
