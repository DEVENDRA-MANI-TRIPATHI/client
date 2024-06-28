import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ sensorKey, sensorData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'card-expanded' : ''}`}>
      <h2 className="card-header">{sensorKey}</h2>
      {Object.keys(sensorData).map((dataKey) => (
        <div key={dataKey} className="data-item">
          <h3 className="data-key">{dataKey}</h3>
          <p className="data-value">Value: {sensorData[dataKey].value}</p>
          <p className="data-unit">Unit: {sensorData[dataKey].unit}</p>
        </div>
      ))}
      <button className="show-more-button" onClick={toggleExpand}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Card;
