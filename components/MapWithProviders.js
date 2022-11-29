import React, {useContext, useEffect} from 'react'
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { SquaresPlusIcon, } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../GlobalContext';


const MapWithProviders = () => {
  const {
    currentLatitude,
    currentLongitude,
    serviceProviders,
    position, getMapElements
  } = useContext(GlobalContext);

  useEffect(() => {
    getMapElements()
  }, [])

  const navigation = useNavigation();
  return (
    <>
      <Text className="text-lg font-bold text-gray-500">Serviços próximos a você</Text>
      <MapView className="w-full " style={{height: 200}} initialRegion={{
        latitude: currentLatitude,
        longitude: currentLongitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      }}
      >
        <Marker coordinate={position} />
        {serviceProviders.map((serviceProvider) => <View key={serviceProvider.id}>
          <Marker coordinate={serviceProvider}>
            <View className="items-center justify-center">
              <SquaresPlusIcon size={20} color="#7b90b3" />
            </View>
          </Marker>
        </View>)}
      </MapView>
    </>
  );
}


export default MapWithProviders
