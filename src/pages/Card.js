import React from 'react';
import '../styles/Card.css'; 

const Card = ({ title, description, imageUrl, className, imageStyle, imagePositionStyle, values, valueStyles, verticalValues }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {imageUrl && <img src={imageUrl} alt={title} className="card-image" style={{ ...imageStyle, ...imagePositionStyle }} />}
        {values && values.length > 0 && (
          <div className={`card-values ${verticalValues ? 'vertical-values' : ''}`}>
            {values.map((value, index) => (
              <span key={index} className="card-value" style={valueStyles && valueStyles[index]}>{value}</span>
            ))}
          </div>
        )}
        <h1 className="card-description">{description}</h1>
      </div>
    </div>
  );
};

export default Card;
