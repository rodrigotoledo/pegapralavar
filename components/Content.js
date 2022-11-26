import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, ImageBackground,SafeAreaView } from 'react-native'
import { Cog6ToothIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';


export default function Content({children}) {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/background.png')} className="w-full h-screen">
      <SafeAreaView>
        <ScrollView>
          <View className="items-center justify-center p-2 mt-16">
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
      <View className="-rotate-12 bg-slate-200 rounded-full p-1 mt-4 absolute">
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} className='border-white border-2 items-center justify-center rounded-full w-full p-2'>
          <Cog6ToothIcon color='#82a0ad' size={30} />
          <Text className="text-gray-500 text-xl">Pega pra Lavar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}