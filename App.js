import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import CarItem from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
      name={"Model X"} 
      tagline={"Order online for"}
      taglineCta={"Touchless delivery"}
      image = {require('./assets/images/ModelX.jpeg')}
       />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
