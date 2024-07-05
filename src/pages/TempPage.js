import React, { useEffect, useState } from 'react'
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';
import '../styles/tempPage.css'
import weather from '../components/Images/weather.png';
import Card from './Card';
import Weatherbackground from '../components/Images/new.webm';

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
        <div className='temp-container'>
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='top-container'>
                <Card
                    title="Today"
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '34px', margin: '20px' }]}
                    className="tempcard today"
                />

                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    className="tempcard"
                />
                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    className="tempcard"
                />
                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    verticalValues={true}
                    className="tempcard"
                />
                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    className="tempcard"
                />
                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    className="tempcard"
                />
                <Card
                    title=""
                    description="This is the description for card 1."
                    imageUrl={weather}
                    imageStyle={{ width: '100%' }}
                    values={[`${temperatureValue} ${temperatureUnit}
                        ${humidityValue} ${humidityUnit}`]}
                    valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                    className="tempcard"
                />

            </div>
            <div className='bottom-container'>
                <div className='bottom-top-container'>
                    <Card
                        title="Max. Temperature"
                        values={[`${temperatureValue} ${temperatureUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                    <Card
                        title="Min. Temperature"
                        values={[`${temperatureValue} ${temperatureUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                    <Card
                        title="Avg. Temperature"
                        values={[`${temperatureValue} ${temperatureUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                </div>
                <div className='bottom-down-container'>
                    <Card
                        title="Max. Humidity"
                        values={[`${humidityValue} ${humidityUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                    <Card
                        title="Min. Humidity"
                        values={[`${humidityValue} ${humidityUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                    <Card
                        title="Avg. Humidity"
                        values={[`${humidityValue} ${humidityUnit}`]}
                        valueStyles={[{ color: 'white', fontSize: '30px', margin: '5px' }]}
                        description="Date:-"
                        className="temp-card"
                    />
                </div>
            </div>

        </div>
    )
}

export default TempPage
