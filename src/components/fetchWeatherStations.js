// fetchWeatherStations.js
import { get, ref, child } from 'firebase/database';
import { database } from './firebaseconfig.js';

const fetchWeatherStations = async () => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, "/"));
    if (snapshot.exists()) {
      const stations = snapshot.val();
      return Object.keys(stations);
    } else {
      console.error("No data available");
      return [];
    }
  } catch (error) {
    console.error("Error fetching weather stations:", error);
    return [];
  }
};

export default fetchWeatherStations;
