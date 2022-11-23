import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { ArchiveBoxArrowDownIcon, HomeIcon, TruckIcon, GiftIcon } from "react-native-heroicons/solid"


const HomeScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(-15.793889)
  const [currentLongitude, setCurrentLongitude] = useState(-47.882778)
  const [errorMsg, setErrorMsg] = useState(null);
  const position = {
    latitude: -15.793889,
    longitude: -47.882778,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

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
  }, []);

  return (
    <ImageBackground source={require('../assets/background.png')} className="w-full h-screen pt-10">
      <TextInput className="m-2 p-2 bg-slate-100 border-gray-200 rounded-full border-4" placeholder='Deseja lavar... roupas, carro, casa?' placeholderTextColor="#000000" />
      <View className="items-center justify-center p-2">
        <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-5">
          <View className="border-gray-300 w-full border-2 items-center justify-center rounded-md ">
            <Text className="text-lg font-bold text-gray-500">Serviços próximos a você</Text>
            <MapView className="w-full " style={{height: 300}} initialRegion={{
              latitude: currentLatitude,
              longitude: currentLongitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            >
              <Marker coordinate={position} />
            </MapView>
          </View>
        </View>

        <View className="flex flex-row space-x-10 mb-5">
          <View className="bg-white flex justify-center items-center rounded-md" style={{width: 120, height: 120}}>
            <TouchableOpacity className="p-2 items-center justify-center">
              <GiftIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Roupas</Text>
              <Text className="text-sm text-slate-400">(0) items</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white flex justify-center items-center rounded-md" style={{width: 120, height: 120}}>
            <TouchableOpacity className="p-2 items-center justify-center">
              <TruckIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Carro</Text>
              <Text className="text-sm text-slate-400">(0) items</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row space-x-10">
          <View className="bg-white flex justify-center items-center rounded-md" style={{width: 120, height: 120}}>
            <TouchableOpacity className="p-2 items-center justify-center">
              <HomeIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Casa</Text>
              <Text className="text-sm text-slate-400">(0) items</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white flex justify-center items-center rounded-md" style={{width: 120, height: 120}}>
            <TouchableOpacity className="p-2 items-center justify-center">
              <ArchiveBoxArrowDownIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Outros</Text>
              <Text className="text-sm text-slate-400">(0) items</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default HomeScreen