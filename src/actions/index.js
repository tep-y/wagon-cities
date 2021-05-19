// TODO: add and export your own actions
import cities from '../cities.js';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function setActiveCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  }
}