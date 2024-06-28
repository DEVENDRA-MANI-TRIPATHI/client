// src/components/WeatherData.js
import React, { useEffect, useState } from 'react';
import { database } from '../components/firebaseconfig';
import { ref, onValue } from 'firebase/database';
import Card from './Card'; // Import the Card component
import '../styles/weather.css'; // Import the CSS file for WeatherData

const WeatherData = () => {
  const [sensors, setSensors] = useState(null);

  useEffect(() => {
    const weatherStationRef = ref(database, 'Weather-station-testing'); // Adjust the path as needed
    onValue(weatherStationRef, (snapshot) => {
      const data = snapshot.val();
      setSensors(data);
    });
  }, []);

  if (!sensors) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <h1 className="text-center text-blue-500 text-2xl hover:underline">Weather Station Data</h1>
      <div className="card-container">
        {Object.keys(sensors).map((sensorKey) => (
          <Card key={sensorKey} sensorKey={sensorKey} sensorData={sensors[sensorKey]} />
        ))}
      </div>
    </div>
  );
};

export default WeatherData;
