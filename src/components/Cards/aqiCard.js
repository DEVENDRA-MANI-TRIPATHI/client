import React from 'react';
import './aqiCard.css'; // Import the CSS file for styling

const AqiCard = ({
  title,
  aqiValue,
  items,
  imagePath,
  dateText,
  cardStyle,
  headerStyle,
  valueStyle,
  dateStyle,
  contentStyle,
  itemStyle,
}) => {
  return (
    <div className="Aqi-card" style={cardStyle}>
      <div className="aqi-header" style={headerStyle}>
        <img src={imagePath} alt="AQI Logo" className="aqi-logo" />
        <div className="aqi-value" style={valueStyle}>{aqiValue}</div>
      </div>
      <div className="aqi-date" style={dateStyle}>{dateText}</div>
      <div className="aqi-content" style={contentStyle}>
        {items.map((item, index) => (
          <div className="aqi-item" key={index} style={itemStyle}>
            {item.showName && <span>{item.name}</span>}
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AqiCard;
