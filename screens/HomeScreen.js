import React, {useEffect, useState, useRef} from 'react'
import { View, Text, TextInput, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { ArchiveBoxArrowDownIcon, HomeIcon, TruckIcon, GiftIcon } from "react-native-heroicons/solid"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const HomeScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState(-15.793889)
  const [currentLongitude, setCurrentLongitude] = useState(-47.882778)
  const [errorMsg, setErrorMsg] = useState(null);
  const position = {
    latitude: -15.793889,
    longitude: -47.882778
  };
  const servicesOptionsRef = useRef();

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

  const servicesOptions = [{title: "Roupas", id: 'clothes'}, {title: "Carro", id: 'car'}, {title: "Casa", id: 'house'}, {title: "Outros", id: 'others'}]

  return (
    <ImageBackground source={require('../assets/background.png')} className="w-full h-screen pt-10">
      <View className="m-2 p-2 bg-slate-100 border-gray-200 rounded-full border-4">
        <SelectDropdown
          ref={servicesOptionsRef}
          data={servicesOptions}
          // defaultValueByIndex={1}
          // defaultValue={'England'}
          onSelect={(selectedItem, index) => {
            if(selectedItem.id === 'clothes'){
              setClothes(clothes + 1)
            }else if(selectedItem.id === 'car'){
              setCar(car + 1)
            }else if(selectedItem.id === 'house'){
              setHouse(house + 1)
            }else if(selectedItem.id === 'others'){
              setOthers(others + 1)
            }
          }}
          defaultButtonText={'Deseja lavar: roupas, carro, casa, outros?'}
          buttonTextAfterSelection={(selectedItem, index) => {
            servicesOptionsRef.current.reset()
            return selectedItem.title;
          }}
          rowTextForSelection={(item, index) => {
            return item.title;
          }}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={styles.dropdownBtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#82a0ad'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdownDropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          selectedRowStyle={styles.dropdownSelectedRowStyle}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
          }}
        />
      </View>
      <View className="items-center justify-center p-2">
        <View className="w-full items-center bg-white rounded-md p-1 opacity-90 mb-5">
          <View className="border-gray-300 w-full border-2 items-center justify-center rounded-md ">
            <Text className="text-lg font-bold text-gray-500">Serviços próximos a você</Text>
            <MapView className="w-full " style={{height: 250}} initialRegion={{
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

        <View className="flex flex-row space-x-10 mb-5">
          <View className="bg-white flex justify-center items-center rounded-md p-1" style={{width: 120, height: 120}}>
            <TouchableOpacity className="border-gray-300 rounded-md border-2 w-full h-full items-center justify-center">
              <GiftIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Roupas</Text>
              <Text className="text-sm text-slate-400">({clothes}) items</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white flex justify-center items-center rounded-md p-1" style={{width: 120, height: 120}}>
            <TouchableOpacity className="border-gray-300 rounded-md border-2 w-full h-full items-center justify-center">
              <TruckIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Carro</Text>
              <Text className="text-sm text-slate-400">({car}) items</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row space-x-10 mb-5">
          <View className="bg-white flex justify-center items-center rounded-md p-1" style={{width: 120, height: 120}}>
            <TouchableOpacity className="border-gray-300 rounded-md border-2 w-full h-full items-center justify-center">
              <HomeIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Casa</Text>
              <Text className="text-sm text-slate-400">({house}) items</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white flex justify-center items-center rounded-md p-1" style={{width: 120, height: 120}}>
            <TouchableOpacity className="border-gray-300 rounded-md border-2 w-full h-full items-center justify-center">
              <ArchiveBoxArrowDownIcon color='#82a0ad' size={40} />
              <Text className="text-slate-600 text-lg font-semibold">Outros</Text>
              <Text className="text-sm text-slate-400">({others}) items</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full items-center bg-white rounded-full p-1">
          <TouchableOpacity className="border-gray-300 border-2 w-full items-center justify-center rounded-full p-1">
            <Text className="text-2xl text-slate-500 font-semibold">Vamos lavar?!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 8,
    
  },
  dropdownBtnTxtStyle: {
    color: '#82a0ad',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    
  },
  dropdownDropdownStyle: {
    backgroundColor: '#444',
    borderRadius: 12,
    
  },
  dropdownRowStyle: {backgroundColor: '#fff', borderBottomColor: '#C5C5C5'},
  dropdownRowTxtStyle: {
    color: '#82a0ad',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdownSelectedRowStyle: {backgroundColor: 'rgba(255,255,255,0.2)'}

})

export default HomeScreen