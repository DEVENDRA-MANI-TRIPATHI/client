import React, { useEffect, useState, useContext } from 'react';
import AqiCard from '../components/Cards/aqiCard';
import '../styles/Aqi.css';
import aqiimg from '../components/Images/Fresh AQI.png';
import Weatherbackground from '../components/Images/new.webm';
import { StationContext } from '../context/StationContext.js'; // Import the StationContext
import { database } from '../components/firebaseconfig.js';
import { ref, onValue } from 'firebase/database';

const App = () => {
    const [aqiData, setAqiData] = useState(null);
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
    const METHANE=MQ4?.Methane?.value

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

    const data2 = {
        aqiValue: aqiData.aqiValue1 || 0,
        items: aqiData.items1 || [
            { name: 'DUST PARTICLES', value: 10, showName: false },
            { name: 'SMOKE', value: 30, showName: false },
            { name: 'CO2', value: 20, showName: false },
            { name: 'CO', value: 15, showName: false },
            { name: 'ALCOHOL', value: 18, showName: false },
            { name: 'AMMONIA', value: 25, showName: false },
            { name: 'BENZENE', value: 12, showName: false },
            { name: 'TOLUENE', value: 22, showName: false },
            { name: 'METHANE', value: 150, showName: false },
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
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
                <AqiCard
                    title="Today"
                    aqiValue={data2.aqiValue}
                    items={data2.items}
                    imagePath={aqiimg}
                    dateText="Today"
                    cardStyle={{ backgroundColor: '#1C1B1F80', width: '150px' }}
                    headerStyle={{ backgroundColor: '#1C1B1F80' }}
                    valueStyle={{ color: '#A3E045' }}
                    dateStyle={{ color: '#ffffff' }}
                    contentStyle={{ padding: '20px' }}
                    itemStyle={{ borderBottom: '1px solid #6F5F99' }}
                />
            </div>
            <div className='api-down-container'>
                <div className='max-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">MAX AQI</div>
                        <div className="aqicard-date">MAY 29</div>
                        <div className="aqicard-value">{aqiData.maxAqi}130 </div>
                    </div>
                </div>
                <div className='min-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">MIN AQI</div>
                        <div className="aqicard-date">MAY 29</div>
                        <div className="aqicard-value">{aqiData.minAqi}</div>
                    </div>
                </div>
                <div className='avg-aqi'>
                    <div className="aqicard-content">
                        <div className="aqicard-title">AVG AQI</div>
                        <div className="aqicard-date">MAY 29</div>
                        <div className="aqicard-value">{aqiData.avgAqi}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
