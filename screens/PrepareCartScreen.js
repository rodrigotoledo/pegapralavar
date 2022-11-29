import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { HomeIcon, TruckIcon, GiftIcon, SparklesIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native';
import Content from '../components/Content';
import { GlobalContext } from '../GlobalContext';

const PrepareCartScreen = () => {
  const {
    clothes, car, house, others,
    clothesDescription, setClothesDescription,
    carDescription, setCarDescription,
    houseDescription, setHouseDescription,
    othersDescription, setOthersDescription
  } = useContext(GlobalContext);

  const navigation = useNavigation();

  function canAdvance(){
    if((clothes > 0 && clothesDescription !== "") || (car > 0 && carDescription !== "") || (house > 0 && houseDescription !== "") || (others > 0 && othersDescription !== "")){
      navigation.navigate('SelectProvidersScreen')
    }
  }

  return(
    <Content>
      <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-2">
        <View className="border-gray-300 border-2 p-1 w-full">
          <View className="w-full items-end justify-center rounded-md">
            <View className="items-end justify-center">
              <Text className="text-lg font-bold text-gray-500">Que tal descrever sobre a limpeza?</Text>
            </View>
          </View>
          <View className="space-y-2">
            <Text className="font-bold text-gray-500">Comece revisando em cada grupo de limpeza os campos a serem preenchidos.</Text>
            <Text className="font-bold text-gray-500">Em ROUPAS por exemplo: 2 camisas brancas, 4 camisas sociais e 4 calças.</Text>
            <Text className="font-bold text-gray-500">Já para CARROS descreva a cor, modelo, ano e algum possível defeito visual como amassado.</Text>
            <Text className="font-bold text-gray-500">Em CASA quem irá limpar precisará saber quantos cômodos, afinal precisam se preparar.</Text>
            <Text className="font-bold text-gray-500">Finalmente em OUTROS realmente se encaixa em itens avulsos como: sapatos, bicicleta, jardim.</Text>
          </View>
          {clothes > 0 &&
          <View className="flex flex-row space-x-2 border-2 border-gray-300 rounded-md my-2">
            <GiftIcon color='#82a0ad' size={40} />
            <TextInput onChangeText={(e) => setClothesDescription(e)} value={clothesDescription} multiline={true} className="bg-transparent mr-10" placeholder={`Descreva suas ${clothes} ROUPA(S)`} />
          </View>
          }

          {car > 0 &&
          <View className="flex flex-row space-x-4 border-2 border-gray-300 rounded-md my-2 flex items-stretch">
            <TruckIcon color='#82a0ad' size={40} />
            <TextInput onChangeText={(e) => setCarDescription(e)} value={carDescription} multiline={true} className="bg-transparent mr-10" placeholder={`Descreva detalhes dos ${car} CARRO(S)`} />
          </View>
          }

          {house > 0 &&
          <View className="flex flex-row space-x-4 border-2 border-gray-300 rounded-md my-2">
            <HomeIcon color='#82a0ad' size={40} />
            <TextInput onChangeText={(e) => setHouseDescription(e)} value={houseDescription} multiline={true} className="bg-transparent mr-10" placeholder={`Na casa, descreva os ${house} CÔMODO(S)`} />
          </View>
          }

          {others > 0 &&
          <View className="flex flex-row space-x-4 border-2 border-gray-300 rounded-md my-2">
            <SparklesIcon color='#82a0ad' size={40} />
            <TextInput onChangeText={(e) => setOthersDescription(e)} value={othersDescription} multiline={true} className="bg-transparent mr-10" placeholder={`Também descreva os ${others} ITEM(S)`} />
          </View>
          }
        </View>
      </View>
      <View className="w-full items-center bg-white rounded-full p-1 mb-2">
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => canAdvance() }>
          <Text className="text-xl text-slate-500 font-semibold">Vamos lá?!</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full items-center bg-white rounded-full p-1">
        <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1" onPress={() => navigation.goBack() }>
          <Text className="text-slate-500 font-semibold">Voltar para corrigir algo</Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
}

export default PrepareCartScreen;
