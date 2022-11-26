import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { HomeIcon, TruckIcon, GiftIcon, PlusCircleIcon, MinusCircleIcon, Cog6ToothIcon, EllipsisHorizontalCircleIcon, SquaresPlusIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import Content from '../components/Content';


const HomeScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(-19.790543)
  const [currentLongitude, setCurrentLongitude] = useState(-42.137651)
  const [serviceProviders, setServiceProviders] = useState([])
  const position = {
    latitude: -19.790543,
    longitude: -42.137651
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

    setServiceProviders([
      {latitude: -19.790180, longitude: -42.139260, id: 'quality', name: 'Quality Hotel'},
      {latitude: -19.7872487, longitude: -42.1369039, id: 'hotel-rota-116', name: 'Hotel Rota 116'},
      {latitude: -19.7871952, longitude: -42.1372458, id: 'abc-hotel', name: 'ABC Hotel'},
      {latitude: -19.7878301, longitude: -42.1380789, id: 'moda-fing', name: 'Moda Fing'},
    ])
  }, []);

  const [clothes, setClothes] = useState(0)
  const [car, setCar] = useState(0)
  const [house, setHouse] = useState(0)
  const [others, setOthers] = useState(0)

  const navigation = useNavigation();

  return (
    <Content>
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
            {serviceProviders.map((serviceProvider) => <>
              <Marker coordinate={serviceProvider} key={serviceProvider.id}>
                <View className="items-center justify-center">
                  <SquaresPlusIcon size={20} color="#7b90b3" />
                </View>
              </Marker>
            </>)}
          </MapView>
        </View>
      </View>

      <View className="flex flex-row space-x-10 mb-2">
        <View className="bg-white justify-center items-center rounded-md p-1 w-[100]">
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
        <View className="bg-white justify-center items-center rounded-md p-1 w-[100]">
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
        <View className="bg-white justify-center items-center rounded-md p-1 w-[100]">
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
        <View className="bg-white justify-center items-center rounded-md p-1 w-[100]">
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
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => navigation.navigate('CreateAccountScreen') }>
          <Text className="text-slate-500 font-semibold">Quero prestar serviços</Text>
        </TouchableOpacity>
      </View>
    </Content>
  )
}

export default HomeScreen
