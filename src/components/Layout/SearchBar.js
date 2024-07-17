// import React, { useState, useEffect } from 'react';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [schoolNames, setSchoolNames] = useState([]);
//   const [filteredNames, setFilteredNames] = useState([]);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     const fetchSchoolNames = async () => {
//       try {
//         const response = await fetch(`${process.env.REACT_APP_API}/api/v1/schools`);
//         const data = await response.json();
//         if (data.success) {
//           const names = data.schools.map(school => school.name);
//           setSchoolNames(names);
//           setFilteredNames(names);
//         } else {
//           console.error('Failed to fetch school names');
//         }
//       } catch (error) {
//         console.error('Error fetching school names:', error);
//       }
//     };

//     fetchSchoolNames();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.length > 0) {
//       const filtered = schoolNames.filter((name) =>
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredNames(filtered);
//     } else {
//       setFilteredNames(schoolNames);
//     }
//     setDropdownVisible(true);
//   };

//   const handleFocus = () => {
//     setFilteredNames(schoolNames);
//     setDropdownVisible(true);
//   };

//   const handleDropdownClick = (name) => {
//     setQuery(name);
//     setDropdownVisible(false);
//   };

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.search-container')) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-bar"
//         value={query}
//         onChange={handleInputChange}
//         onFocus={handleFocus}
//         placeholder="Search for schools..."
//       />
//       {dropdownVisible && (
//         <div className="dropdown-content">
//           {filteredNames.map((name, index) => (
//             <div
//               key={index}
//               onClick={() => handleDropdownClick(name)}
//               className="dropdown-item"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from 'react';
// import fetchWeatherStations from '../fetchWeatherStations.js';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [stationNames, setStationNames] = useState([]);
//   const [filteredNames, setFilteredNames] = useState([]);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     const fetchStationNames = async () => {
//       try {
//         const names = await fetchWeatherStations();
//         setStationNames(names);
//         setFilteredNames(names);
//       } catch (error) {
//         console.error('Error fetching weather station names:', error);
//       }
//     };

//     fetchStationNames();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.length > 0) {
//       const filtered = stationNames.filter((name) =>
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredNames(filtered);
//     } else {
//       setFilteredNames(stationNames);
//     }
//     setDropdownVisible(true);
//   };

//   const handleFocus = () => {
//     setFilteredNames(stationNames);
//     setDropdownVisible(true);
//   };

//   const handleDropdownClick = (name) => {
//     setQuery(name);
//     setDropdownVisible(false);
//   };

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.search-container')) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-bar"
//         value={query}
//         onChange={handleInputChange}
//         onFocus={handleFocus}
//         placeholder="Search for weather stations..."
//       />
//       {dropdownVisible && (
//         <div className="dropdown-content">
//           {filteredNames.map((name, index) => (
//             <div
//               key={index}
//               onClick={() => handleDropdownClick(name)}
//               className="dropdown-item"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState, useEffect } from 'react';
// import fetchWeatherStations from '../fetchWeatherStations.js';

// const SearchBar = ({ onStationSelect }) => {
//   const [query, setQuery] = useState('');
//   const [stationNames, setStationNames] = useState([]);
//   const [filteredNames, setFilteredNames] = useState([]);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     const fetchStationNames = async () => {
//       try {
//         const names = await fetchWeatherStations();
//         setStationNames(names);
//         setFilteredNames(names);
//       } catch (error) {
//         console.error('Error fetching weather station names:', error);
//       }
//     };

//     fetchStationNames();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.length > 0) {
//       const filtered = stationNames.filter((name) =>
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredNames(filtered);
//     } else {
//       setFilteredNames(stationNames);
//     }
//     setDropdownVisible(true);
//   };

//   const handleFocus = () => {
//     setFilteredNames(stationNames);
//     setDropdownVisible(true);
//   };

//   const handleDropdownClick = (name) => {
//     setQuery(name);
//     setDropdownVisible(false);
//     onStationSelect(name);
//   };

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.search-container')) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-bar"
//         value={query}
//         onChange={handleInputChange}
//         onFocus={handleFocus}
//         placeholder="Search for weather stations..."
//       />
//       {dropdownVisible && (
//         <div className="dropdown-content">
//           {filteredNames.map((name, index) => (
//             <div
//               key={index}
//               onClick={() => handleDropdownClick(name)}
//               className="dropdown-item"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// SearchBar.js

// import React, { useState, useEffect } from 'react';
// import fetchWeatherStations from '../fetchWeatherStations.js';

// const SearchBar = ({ onStationSelect }) => {
//   const [query, setQuery] = useState('');
//   const [stationNames, setStationNames] = useState([]);
//   const [filteredNames, setFilteredNames] = useState([]);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     const fetchStationNames = async () => {
//       try {
//         const names = await fetchWeatherStations();
//         setStationNames(names);
//         setFilteredNames(names);
//       } catch (error) {
//         console.error('Error fetching weather station names:', error);
//       }
//     };

//     fetchStationNames();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.length > 0) {
//       const filtered = stationNames.filter((name) =>
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredNames(filtered);
//     } else {
//       setFilteredNames(stationNames);
//     }
//     setDropdownVisible(true);
//   };

//   const handleFocus = () => {
//     setFilteredNames(stationNames);
//     setDropdownVisible(true);
//   };

//   const handleDropdownClick = (name) => {
//     setQuery(name);
//     setDropdownVisible(false);
//     if (typeof onStationSelect === 'function') {
//       onStationSelect(name); // Call onStationSelect with selected station name
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.search-container')) {
//       setDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-bar"
//         value={query}
//         onChange={handleInputChange}
//         onFocus={handleFocus}
//         placeholder="Search for weather stations..."
//       />
//       {dropdownVisible && (
//         <div className="dropdown-content">
//           {filteredNames.map((name, index) => (
//             <div
//               key={index}
//               onClick={() => handleDropdownClick(name)}
//               className="dropdown-item"
//             >
//               {name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// SearchBar.js

// SearchBar.js

// SearchBar.js

import React, { useState, useEffect } from 'react';
import fetchWeatherStations from '../fetchWeatherStations.js';

const SearchBar = ({ onStationSelect }) => {
  const [query, setQuery] = useState('');
  const [stationNames, setStationNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchStationNames = async () => {
      try {
        const names = await fetchWeatherStations();
        setStationNames(names);
        setFilteredNames(names);
      } catch (error) {
        console.error('Error fetching weather station names:', error);
      }
    };

    fetchStationNames();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = stationNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(filtered);
    } else {
      setFilteredNames(stationNames);
    }
    setDropdownVisible(true);
  };

  const handleFocus = () => {
    setFilteredNames(stationNames);
    setDropdownVisible(true);
  };

  const handleDropdownClick = (name) => {
    setQuery(name);
    setDropdownVisible(false);
    if (typeof onStationSelect === 'function') {
      onStationSelect(name); // Call onStationSelect with selected station name
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-container')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder="Search for weather stations..."
      />
      {dropdownVisible && (
        <div className="dropdown-content">
          {filteredNames.map((name, index) => (
            <div
              key={index}
              onClick={() => handleDropdownClick(name)}
              className="dropdown-item"
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
