import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {
    return (
    <View style = {styles.carContainer}>
        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}
         />
        <View style = {styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,000</Text>
        </View>
        <StyledButton 
        type="primary"
        content={"Custom Order"}
        onPress={()=> {
          console.warn("Custom Order was pressed")
        }}
        />
        <StyledButton 
        type="secondary"
        content={"Existing Inventory"}
        onPress={()=> {
          console.warn("Existing inventory was pressed was pressed")
        }}
        />
     </View>
    )
}

export default CarItem
