import React from 'react';
import './Card.css'; 

const Card = ({ title, description, imageUrl, className, imageClass,valueClass,imageStyle, imagePositionStyle, values, valueStyles, verticalValues }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {imageUrl && <img src={imageUrl} alt={title} className={`card-image ${imageClass}`}
          //style={{ ...imageStyle, ...imagePositionStyle }}
        />}
        {values && values.length > 0 && (
          <div className={`card-values ${verticalValues ? 'vertical-values' : ''}`}>
            {values.map((value, index) => (
              <span key={index} className={`card - value ${valueClass}`} style={valueStyles && valueStyles[index]}>{value}</span>
            ))}
          </div>
        )}
        <h1 className="card-description">{description}</h1>
      </div>
    </div>
  );
};

export default Card;
