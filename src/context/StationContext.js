// StationContext.js
import React, { createContext, useState } from 'react';

export const StationContext = createContext();

export const StationProvider = ({ children }) => {
  const defaultStation = 'Weather-station-testing';
  const [selectedStation, setSelectedStation] = useState(defaultStation);

  return (
    <StationContext.Provider value={{ selectedStation, setSelectedStation }}>
      {children}
    </StationContext.Provider>
  );
};
