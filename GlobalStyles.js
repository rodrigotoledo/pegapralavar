import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  shadow: {
    shadowColor: '#c2c0bc',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  }
});