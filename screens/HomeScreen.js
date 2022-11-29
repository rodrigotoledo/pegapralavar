import React, {useContext, useEffect} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HomeIcon, TruckIcon, GiftIcon, PlusCircleIcon, MinusCircleIcon, SparklesIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import Content from '../components/Content';
import { GlobalContext } from '../GlobalContext';
import MapWithProviders from '../components/MapWithProviders';


const HomeScreen = () => {
  const {
    clothes, setClothes,
    car, setCar,
    house, setHouse,
    others, setOthers,
    getMapElements
  } = useContext(GlobalContext);

  useEffect(() => {
    getMapElements()
  }, [])

  const navigation = useNavigation();

  return (
    <Content>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 w-full border-2 items-end justify-center rounded-md ">
          <MapWithProviders />
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
              <Text className="text-sm text-slate-400">Até {clothes} roupas</Text>
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
              <Text className="text-sm text-slate-400">{car} carro(s)</Text>
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
              <Text className="text-sm text-slate-400">Até {house} cômodos</Text>
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
              <Text className="text-sm text-slate-400">Até {others} items</Text>
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
