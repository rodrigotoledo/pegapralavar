import GlobalStyles from './GlobalStyles';
import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

const Container = ({children}) => (
  <ImageBackground source={require('./assets/background.png')} className="w-full h-screen pt-10">
    {children}
  </ImageBackground>
);

export default Container;
