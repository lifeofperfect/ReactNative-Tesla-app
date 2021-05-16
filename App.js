import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import CarItem from './components/carItem';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <CarItem 
      name={"Model X"} 
      tagline={"Order online for"}
      taglineCta={"Touchless delivery"}
      image = {require('./assets/images/ModelX.jpeg')}
       /> */}
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
