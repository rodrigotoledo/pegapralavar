import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { HomeIcon, TruckIcon, GiftIcon, SparklesIcon, SquaresPlusIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import Content from '../components/Content';
import MapWithProviders from '../components/MapWithProviders';
import { GlobalContext } from '../GlobalContext';


const SelectProvidersScreen = () => {
  const {
    clothes, cars, house, others,
    setClothesDescription, setCarDescription, setHouseDescription, setOthersDescription
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  return(
    <Content>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 w-full border-2 items-end justify-center rounded-md mb-2">
          <View className="items-end justify-center">
            <Text className="text-lg font-bold text-gray-500">Agora escolha quem pode lhe atender</Text>
          </View>
        </View>
        <View className="rounded-full bg-gray-200 w-full">
          <TextInput placeholder='Endereço atual, com cidade e estado' className="p-2 border-white border m-1 rounded-full" placeholderTextColor='#1a202c' />
        </View>
      </View>
      <View className="w-full items-center bg-white rounded-full p-1 mb-2">
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => navigation.navigate('SelectServicesScreen') }>
          <Text className="text-xl text-slate-500 font-semibold">Vamos lá?!</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full items-center bg-white rounded-full p-1">
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => navigation.goBack() }>
          <Text className="text-slate-500 font-semibold">Voltar para ajustar algo</Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
}

export default SelectProvidersScreen;
