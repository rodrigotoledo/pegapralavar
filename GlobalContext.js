import React, { createContext, useState, useEffect } from "react";
import * as Location from 'expo-location';

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [currentLatitude, setCurrentLatitude] = useState(-19.790543)
  const [currentLongitude, setCurrentLongitude] = useState(-42.137651)
  const [serviceProviders, setServiceProviders] = useState([])
  const position = {
    latitude: -19.790543,
    longitude: -42.137651
  };

  const [clothes, setClothes] = useState(0)
  const [car, setCar] = useState(0)
  const [house, setHouse] = useState(0)
  const [others, setOthers] = useState(0)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLatitude(location["coords"]["latitude"])
      setCurrentLongitude(location["coords"]["longitude"])
    })();

    setServiceProviders([
      {latitude: -19.790180, longitude: -42.139260, id: 'quality', name: 'Quality Hotel'},
      {latitude: -19.7872487, longitude: -42.1369039, id: 'hotel-rota-116', name: 'Hotel Rota 116'},
      {latitude: -19.7871952, longitude: -42.1372458, id: 'abc-hotel', name: 'ABC Hotel'},
      {latitude: -19.7878301, longitude: -42.1380789, id: 'moda-fing', name: 'Moda Fing'},
    ])
  }, []);

  return (
    <GlobalContext.Provider value={{
      currentLatitude, setCurrentLatitude, currentLongitude, setCurrentLongitude,
      position,
      serviceProviders, setServiceProviders,
      clothes, setClothes, car, setCar, house, setHouse, others, setOthers
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
