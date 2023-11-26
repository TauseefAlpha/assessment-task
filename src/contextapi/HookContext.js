import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const HooksContext = createContext();

export const HooksProvider = ({children}) => {
  const [lbs, setLbs] = useState('');
  const [ft, setFt] = useState('');
  const [inches, setInches] = useState('');
  const [kg, setKg] = useState('');
  const [meters, setMeters] = useState('');
  const [unit, setUnit] = useState('Imperial');

  useEffect(() => {
    if (unit === 'Metric') {
      // Convert lbs, ft, inches to kg, and meters
      const weightInKg = (parseFloat(lbs) * 0.453592).toFixed(2);
      const heightInMeters = (
        (parseFloat(ft) * 12 + parseFloat(inches)) *
        0.0254
      ).toFixed(2);

      setKg(weightInKg);
      setMeters(heightInMeters);
    }
  }, [lbs, ft, inches, unit]);



  useEffect(() => {
    // Read data from AsyncStorage when component mounts
    const fetchData = async () => {
      const storedData = await readFromLocalStorage();
      if (storedData) {
        const {lbs, ft, inches, kg, meters, unit} = storedData;
        setLbs(lbs);
        setFt(ft);
        setInches(inches);
        setKg(kg);
        setMeters(meters);
        setUnit(unit);
      }
    };

    fetchData();
  }, []); 

  const saveToLocalStorage = async () => {
    try {
      const data = {
        lbs,
        ft,
        inches,
        kg,
        meters,
        unit,
      };
      await AsyncStorage.setItem('weightHeightData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  const readFromLocalStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('weightHeightData');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading from local storage:', error);
      return null;
    }
  };

  const resetLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem('weightHeightData');
    } catch (error) {
      console.error('Error resetting local storage:', error);
    }
  };

  const resetFields = () => {
    setLbs('');
    setFt('');
    setInches('');
    setKg('');
    setMeters('');
    resetLocalStorage();
  };


  return (
    <HooksContext.Provider
      value={{
        lbs,
        setLbs,
        ft,
        setFt,
        inches,
        setInches,
        kg,
        meters,
        unit,
        setUnit,
        resetFields,
        readFromLocalStorage,
        saveToLocalStorage
      }}>
      {children}
    </HooksContext.Provider>
  );
};

export const useHooksContext = () => {
  return useContext(HooksContext);
};
