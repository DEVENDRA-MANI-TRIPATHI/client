import React from 'react';
import WeatherCard from '../components/Cards/tempCard.js';
import '../styles/tempPage.css'
import tempimg from '../components/Images/weather.png';
import Weatherbackground from '../components/Images/new.webm';

const TempPage = () => {
    return (
        <div className="temp-container">
            <video className='background-video' src={Weatherbackground} autoPlay loop muted />
            <div className='top-temp-container'>
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '300px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
                <WeatherCard
                    imageSrc={tempimg}
                    imageStyle={{width:'100%'}}
                    day="TODAY"
                    date="JUN 06"
                    temperature="45°C"
                    condition="PARTLY CLOUDY"
                    humidity="29%"
                    style={{width: '150px' }}
                />
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br/>TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br/>TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br/>TEMPERATURE</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
            </div>
            <div className='down-temp-container'>
                <div className='max-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MAX. <br/>HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>

                </div>
                <div className='min-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">MIN. <br/>HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
                <div className='avg-temp'>
                    <div class="tempcard-content">
                        <div class="tempcard-title">AVG. <br/>HUMIDITY</div>
                        <div class="tempcard-date">MAY 29</div>
                        <div class="tempcard-value">210</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TempPage;
