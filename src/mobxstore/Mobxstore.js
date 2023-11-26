import {makeObservable, observable, action} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MobXStore {
  lbs = '';
  ft = '';
  inches = '';
  kg = '';
  meters = '';
  unit = 'Imperial';

  constructor() {
    makeObservable(this, {
      lbs: observable,
      ft: observable,
      inches: observable,
      kg: observable,
      meters: observable,
      unit: observable,
      setLbs: action,
      setFt: action,
      setInches: action,
      setUnit: action,
      convertUnits: action,
      resetFields: action,
      saveToLocalStorage: action,
      readFromLocalStorage: action,
    });

    this.readFromLocalStorage();
  }

  setLbs(value) {
    this.lbs = value;
  }
  setFt(value) {
    this.ft = value;
  }

  setInches(value) {
    this.inches = value;
  }

  setUnit(value) {
    this.unit = value;
  }

  convertUnits() {
    if (this.unit === 'Metric') {
      // Convert lbs, ft, inches to kg, and meters
      const weightInKg = (parseFloat(this.lbs) * 0.453592).toFixed(2);
      const heightInMeters = (
        (parseFloat(this.ft) * 12 + parseFloat(this.inches)) *
        0.0254
      ).toFixed(2);

      this.kg = weightInKg;
      this.meters = heightInMeters;
    }
  }

  resetFields() {
    this.lbs = '';
    this.ft = '';
    this.inches = '';
    this.kg = '';
    this.meters = '';
    this.resetLocalStorage();
  }

  saveToLocalStorage = async () => {
    try {
      const data = {
        lbs: this.lbs,
        ft: this.ft,
        inches: this.inches,
        kg: this.kg,
        meters: this.meters,
        unit: this.unit,
      };
      await AsyncStorage.setItem('weightHeightDataStore', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  readFromLocalStorage = async () => {
    try {
      const data = await AsyncStorage.getItem('weightHeightDataStore');
      if (data) {
        const {lbs, ft, inches, kg, meters, unit} = JSON.parse(data);
        this.lbs = lbs;
        this.ft = ft;
        this.inches = inches;
        this.kg = kg;
        this.meters = meters;
        this.unit = unit;
      }
    } catch (error) {
      console.error('Error reading from local storage:', error);
    }
  };

  resetLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem('weightHeightDataStore');
    } catch (error) {
      console.error('Error resetting local storage:', error);
    }
  };
}

const mobXstore = new MobXStore();

export default mobXstore;
