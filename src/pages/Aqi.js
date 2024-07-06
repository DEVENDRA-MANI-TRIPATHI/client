import React from 'react';
import AqiCard from '../components/Cards/aqiCard';
import '../styles/Aqi.css';
import aqiimg from '../components/Images/Fresh AQI.png'
import Weatherbackground from '../components/Images/new.webm';


const data1 = {
    aqiValue: 152,
    items: [
        { name: 'DUST PARTICLES', value: 20, showName: true },
        { name: 'SMOKE', value: 56, showName: true },
        { name: 'CO2', value: 35, showName: true },
        { name: 'CO', value: 50, showName: true },
        { name: 'ALCOHOL', value: 38, showName: true },
        { name: 'AMMONIA', value: 40, showName: true },
        { name: 'BENZENE', value: 25, showName: true },
        { name: 'TOLUENE', value: 55, showName: true },
        { name: 'METHANE', value: 300, showName: true },
    ]
};

const data2 = {
    aqiValue: 90,
    items: [
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

const App = () => {
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
                    <div class="aqicard-content">
                        <div class="aqicard-title">MAX AQI</div>
                        <div class="aqicard-date">MAY 29</div>
                        <div class="aqicard-value">210</div>
                    </div>

                </div>
                <div className='min-aqi'>
                    <div class="aqicard-content">
                        <div class="aqicard-title">MAX AQI</div>
                        <div class="aqicard-date">MAY 29</div>
                        <div class="aqicard-value">210</div>
                    </div>
                </div>
                <div className='avg-aqi'>
                    <div class="aqicard-content">
                        <div class="aqicard-title">MAX AQI</div>
                        <div class="aqicard-date">MAY 29</div>
                        <div class="aqicard-value">210</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
