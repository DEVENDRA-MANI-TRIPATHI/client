import React, { useEffect, useState } from 'react';
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import WeatherCard from '../components/Cards/tempCard.js';
import '../styles/tempPage.css';
import tempimg from '../components/Images/weather.png';
import Weatherbackground from '../components/Images/new.webm';

const getCurrentDate = () => {
    const today = new Date();
    const options = { month: 'short', day: '2-digit' };
    return today.toLocaleDateString('en-US', options).toUpperCase();
};

const formatTemperature = (value) => `${value}°C`;  // Adjust the unit as per your requirement (°C or °F)
const formatHumidity = (value) => `${value}%`;

const TempPage = () => {
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
    } = sensors || {};

    const temperatureValue = DHT11?.Temperature?.value;
    const temperatureUnit = DHT11?.Temperature?.unit;
    const humidityValue = DHT11?.Humidity?.value;
    const humidityUnit = DHT11?.Humidity?.unit;

    return (
        <div className="temp-container">
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='top-temp-container'>
            <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date={getCurrentDate()}
                    temperature={formatTemperature(temperatureValue)}
                    condition="PARTLY CLOUDY"
                    humidity={formatHumidity(humidityValue)}
                    style={{ width: '300px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{ width: '100%' }}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{ width: '150px' }}
                />
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br />TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br />TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br />TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br />HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br />HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br />HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TempPage;
