import React, {useContext} from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { HomeIcon, TruckIcon, GiftIcon, PlusCircleIcon, MinusCircleIcon, SquaresPlusIcon, SparklesIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import Content from '../components/Content';
import { GlobalContext } from '../GlobalContext';


const HomeScreen = () => {
  const {
    currentLatitude,
    currentLongitude,
    serviceProviders,
    position,
    clothes, setClothes,
    car, setCar,
    house, setHouse,
    others, setOthers
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  return (
    <Content>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 w-full border-2 items-end justify-center rounded-md ">
          <Text className="text-lg font-bold text-gray-500">Próximos a você</Text>
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
        </View>
      </View>

      <View className="flex flex-row space-x-10 mb-2">
        <View className="bg-white justify-center items-center rounded-md p-1 w-[150]">
          <View className='border-gray-300 rounded-md border-2 items-center w-full'>
            <TouchableOpacity className="w-full items-center justify-center">
              <GiftIcon color='#82a0ad' size={30} />
            </TouchableOpacity>
            <View className='justify-center items-center'>
              <Text className="text-slate-600 font-semibold ">Roupas</Text>
              <Text className="text-sm text-slate-400">({clothes}) roupas</Text>
              <View className='flex-row justify-center'>
                <TouchableOpacity onPress={() => clothes > 0 ? setClothes(clothes-10) : true}>
                  <MinusCircleIcon color='#82a0ad' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setClothes(clothes+10)}>
                  <PlusCircleIcon color='#82a0ad' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white justify-center items-center rounded-md p-1 w-[150]">
          <View className='border-gray-300 rounded-md border-2 items-center w-full'>
            <TouchableOpacity className="w-full items-center justify-center">
              <TruckIcon color='#82a0ad' size={30} />
            </TouchableOpacity>
            <View className='justify-center items-center'>
              <Text className="text-slate-600 font-semibold">Carro</Text>
              <Text className="text-sm text-slate-400">({car}) carros</Text>
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
        <View className="bg-white justify-center items-center rounded-md p-1 w-[150]">
          <View className='border-gray-300 rounded-md border-2 items-center w-full'>
            <TouchableOpacity className="w-full items-center justify-center">
              <HomeIcon color='#82a0ad' size={30} />
            </TouchableOpacity>
            <View className='justify-center items-center'>
              <Text className="text-slate-600 font-semibold">Casa</Text>
              <Text className="text-sm text-slate-400">({house}) cômodos</Text>
              <View className='flex-row justify-center'>
                <TouchableOpacity onPress={() => house > 0 ? setHouse(house-4) : true}>
                  <MinusCircleIcon color='#82a0ad' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setHouse(house+4)}>
                  <PlusCircleIcon color='#82a0ad' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white justify-center items-center rounded-md p-1 w-[150]">
          <View className='border-gray-300 rounded-md border-2 items-center w-full'>
            <TouchableOpacity className="w-full items-center justify-center">
              <SparklesIcon color='#82a0ad' size={30} />
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
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => navigation.navigate('PrepareCartScreen') }>
          <Text className="text-xl text-slate-500 font-semibold">Preparar limpeza</Text>
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
