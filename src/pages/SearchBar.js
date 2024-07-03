import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [schoolNames, setSchoolNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchSchoolNames = async () => {
      try {
        const response = await fetch('/schools/name');
        const data = await response.json();
        if (data.success) {
          setSchoolNames(data.schoolNames);
        } else {
          console.error('Failed to fetch school names');
        }
      } catch (error) {
        console.error('Error fetching school names:', error);
      }
    };

    fetchSchoolNames();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = schoolNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(filtered);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleDropdownClick = (name) => {
    setQuery(name);
    setDropdownVisible(false);
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
        placeholder="Search for schools..."
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
