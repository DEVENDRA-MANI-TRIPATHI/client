import React from 'react';
import './tempCard.css';

const WeatherCard = ({ day, date, temperature, condition, humidity, style, imageSrc, imageStyle }) => {
  return (
    <div className="temp-card" style={style}>
      <div className="temp-condition">{condition}</div>
      <img src={imageSrc} alt="Weather condition" className="temp-image" style={imageStyle} />
      <div className="temp-temp">{temperature}</div>
      <div className="temp-humidity">{humidity}</div>
      <div className="temp-date">{date}</div>
      <div className="temp-day">{day}</div>
    </div>
  );
};

export default WeatherCard;
