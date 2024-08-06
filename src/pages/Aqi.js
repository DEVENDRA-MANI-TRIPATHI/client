import React, { useEffect, useState, useContext } from 'react';
import AqiCard from '../components/Cards/aqiCard';
import '../styles/Aqi.css';
import aqiimg from '../components/Images/Fresh AQI.png';
import Weatherbackground from '../components/Images/new.webm';
import { StationContext } from '../context/StationContext.js'; // Import the StationContext
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';


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

const App = () => {
    const [aqiData, setAqiData] = useState(null);
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { selectedStation } = useContext(StationContext); // Consume the StationContext

    useEffect(() => {
        if (!selectedStation) return;

        const aqiRef = ref(database, `${selectedStation}`);

        const fetchData = () => {
            onValue(
                aqiRef,
                (snapshot) => {
                    const data = snapshot.val();
                    setAqiData(data);
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
        };

        fetchData();
        return () => { };
    }, [selectedStation]);

   useEffect(() => {
       const fetchWeatherData = async () => {
           try {
               const response = await fetch(`http://localhost:8080/api/weather-data/station/${selectedStation}`);
               if (!response.ok) {
                   throw new Error('Network response was not ok');
               }
               const data = await response.json();

               console.log("Fetched weather data:", data); // Log fetched weather data

               const organizedData = Object.entries(data).map(([date, details]) => {
                   return {
                       date,
                       aqiValue: details.MQ135 ?.AirQuality.value || 0,
                       items: [
                           { name: 'DUST PARTICLES', value: details.DustParticles?.value || 0, showName: false },
                           { name: 'SMOKE', value: details.Smoke?.value || 0, showName: false },
                           { name: 'CO2', value: details.MQ135?.CO2?.value || 0, showName: false },
                           { name: 'CO', value: details.MQ7?.CarbonMonoxide?.value || 0, showName: false },
                           { name: 'ALCOHOL', value: details.MQ3?.Alcohol?.value || 0, showName: false },
                           { name: 'AMMONIA', value: details.MQ135?.Ammonia?.value || 0, showName: false },
                           { name: 'BENZENE', value: details.MQ135?.Benzene?.value || 0, showName: false },
                           { name: 'TOLUENE', value: details.Toluene?.value || 0, showName: false },
                           { name: 'METHANE', value: details.MQ4?.Methane?.value || 0, showName: false },
                       ]
                   };
               });

               const lastSixEntrries = organizedData.slice(-6).reverse();

               setWeatherData(lastSixEntrries);
           } catch (error) {
               console.error("Error fetching weather data:", error);
               setError(error);
           } finally {
               setLoading(false);
           }
       };

       if (selectedStation) {
           fetchWeatherData();
       }
   }, [selectedStation]);
    
    // Calculate Min, Max, and Average AQI
    const aqiValues = weatherData.map(data => data.aqiValue);
    const minAqi = Math.min(...aqiValues);
    const maxAqi = Math.max(...aqiValues);
    const avgAqi = (aqiValues.reduce((sum, value) => sum + value, 0) / aqiValues.length) || 0;

    //get dates

    const maxAqiDate = formatDate(weatherData.find(dayData => dayData.aqiValue === maxAqi)?.date || '');
    const minAqiDate = formatDate(weatherData.find(dayData =>  dayData.aqiValue === minAqi)?.date || '');
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!aqiData) {
        return <div>No data available</div>;
    }
    const {
        DHT11,
        MQ135,
        MQ4,
        MQ7
    } = aqiData || {};
    
    const Alcohol=MQ135?.Alcohol?.value
    const CO2=MQ135?.CO2?.value
    const CO=MQ7?.CarbonMonoxide?.value
    const BENZENE=MQ135?.Benzene?.value
    const AMMONIA=MQ135?.Ammonia?.value
    const TOLUENE=MQ135?.Toluene?.value
    const SMOKE=MQ135?.Smoke?.value
    const METHANE = MQ4?.Methane?.value
    
    

    const data1 = {
        aqiValue: MQ135?.AirQuality?.value || 0,
        items: aqiData.items1 || [
            { name: 'DUST PARTICLES', value: 10, showName: true },
            { name: 'SMOKE', value: SMOKE, showName: true },
            { name: 'CO2', value: CO2, showName: true },
            { name: 'CO', value: CO, showName: true },
            { name: 'ALCOHOL', value: Alcohol, showName: true },
            { name: 'AMMONIA', value: AMMONIA, showName: true },
            { name: 'BENZENE', value: BENZENE, showName: true },
            { name: 'TOLUENE', value: TOLUENE, showName: true },
            { name: 'METHANE', value: METHANE, showName: true },
        ]
    };
    return (
        <div className="Aqi-container">
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='Aqi-top-container'>
                <AqiCard
                    title="Today"
                    aqiValue={data1.aqiValue}
                    items={data1.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                 {weatherData.length > 0 && weatherData.slice(0, 6).map((data, index) => (
                <AqiCard
                    key={index}
                    title="Today"
                    aqiValue={data.aqiValue}
                    items={data.items}
                    imagePath={aqiimg}
                    dateText={formatDate(data.date)}
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
            ))}
            </div>
            <div className='api-down-container'>
                <div className='max-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">MAX AQI</div>
                        <div className="aqicard-date">{maxAqiDate}</div>
                        <div className="aqicard-value">{maxAqi }</div>
                    </div>
                </div>
                <div className='min-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">MIN AQI</div>
                        <div className="aqicard-date">{minAqiDate}</div>
                        <div className="aqicard-value">{minAqi}</div>
                    </div>
                </div>
                <div className='avg-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">AVG AQI</div>
                        <div className="aqicard-date">{getCurrentDate()}</div>
                        <div className="aqicard-value">{avgAqi}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
