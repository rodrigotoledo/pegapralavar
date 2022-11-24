import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { HomeIcon, TruckIcon, GiftIcon, PlusCircleIcon, MinusCircleIcon, Cog6ToothIcon } from "react-native-heroicons/solid"

const HomeScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(-15.793889)
  const [currentLongitude, setCurrentLongitude] = useState(-47.882778)
  const position = {
    latitude: -15.793889,
    longitude: -47.882778
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

  const [clothes, setClothes] = useState(0)
  const [car, setCar] = useState(0)
  const [house, setHouse] = useState(0)
  const [others, setOthers] = useState(0)

  return (
    <ImageBackground source={require('../assets/background.png')} className="w-full h-screen">
      <SafeAreaView>
        <ScrollView>
          <View className="items-center justify-center p-2 mt-12">
            <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
              <View className="border-gray-300 w-full border-2 items-end justify-center rounded-md ">
                <Text className="text-lg font-bold text-gray-500">Serviços próximos a você</Text>
                <MapView className="w-full " style={{height: 200}} initialRegion={{
                  latitude: currentLatitude,
                  longitude: currentLongitude,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }}
                >
                  <Marker coordinate={position} />
                </MapView>
              </View>
            </View>

            <View className="flex flex-row space-x-10 mb-2">
              <View className="bg-white justify-center items-center rounded-md p-1" style={{width: 100}}>
                <View className='border-gray-300 rounded-md border-2 items-center w-full'>
                  <TouchableOpacity className="w-full items-center justify-center">
                    <GiftIcon color='#82a0ad' size={30} />
                  </TouchableOpacity>
                  <View className='justify-center items-center'>
                    <Text className="text-slate-600 font-semibold ">Roupas</Text>
                    <Text className="text-sm text-slate-400">({clothes}) items</Text>
                    <View className='flex-row justify-center'>
                      <TouchableOpacity onPress={() => clothes > 0 ? setClothes(clothes-1) : true}>
                        <MinusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setClothes(clothes+1)}>
                        <PlusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View className="bg-white justify-center items-center rounded-md p-1" style={{width: 100}}>
                <View className='border-gray-300 rounded-md border-2 items-center w-full'>
                  <TouchableOpacity className="w-full items-center justify-center">
                    <TruckIcon color='#82a0ad' size={30} />
                  </TouchableOpacity>
                  <View className='justify-center items-center'>
                    <Text className="text-slate-600 font-semibold">Carro</Text>
                    <Text className="text-sm text-slate-400">({car}) items</Text>
                    <View className='flex-row justify-center'>
                      <TouchableOpacity onPress={() => car > 0 ? setCar(car-1) : true}>
                        <MinusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setCar(car+1)}>
                        <PlusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex flex-row space-x-10 mb-2">
              <View className="bg-white justify-center items-center rounded-md p-1" style={{width: 100}}>
                <View className='border-gray-300 rounded-md border-2 items-center w-full'>
                  <TouchableOpacity className="w-full items-center justify-center">
                    <HomeIcon color='#82a0ad' size={30} />
                  </TouchableOpacity>
                  <View className='justify-center items-center'>
                    <Text className="text-slate-600 font-semibold">Casa</Text>
                    <Text className="text-sm text-slate-400">({house}) items</Text>
                    <View className='flex-row justify-center'>
                      <TouchableOpacity onPress={() => house > 0 ? setHouse(house-1) : true}>
                        <MinusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setHouse(house+1)}>
                        <PlusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View className="bg-white justify-center items-center rounded-md p-1" style={{width: 100}}>
                <View className='border-gray-300 rounded-md border-2 items-center w-full'>
                  <TouchableOpacity className="w-full items-center justify-center">
                    <HomeIcon color='#82a0ad' size={30} />
                  </TouchableOpacity>
                  <View className='justify-center items-center'>
                    <Text className="text-slate-600 font-semibold">Outros</Text>
                    <Text className="text-sm text-slate-400">({others}) items</Text>
                    <View className='flex-row justify-center'>
                      <TouchableOpacity onPress={() => others > 0 ? setOthers(others-1) : true}>
                        <MinusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setOthers(others+1)}>
                        <PlusCircleIcon color='#82a0ad' />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View className="w-full items-center bg-white rounded-full p-1 mb-2">
              <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1">
                <Text className="text-xl text-slate-500 font-semibold">Vamos lavar?!</Text>
              </TouchableOpacity>
            </View>

            <View className="w-full items-center bg-white rounded-full p-1">
              <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1">
                <Text className="text-slate-500 font-semibold">Quero prestar serviços</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{position: 'absolute'}} className="-rotate-12 bg-slate-200 rounded-full p-1">
        <View className='border-white border-2 items-center justify-center rounded-full w-full p-2'>
          <Cog6ToothIcon color='#82a0ad' size={30} />
          <Text className="text-gray-500 text-xl">Pega pra Lavar</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default HomeScreen