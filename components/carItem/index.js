import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = ({name, tagline, image, taglineCta}) => {
    return (
    <View style = {styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}
         />
        <View style = {styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            {tagline}
            {" "}
            <Text style={styles.subtitleCta}>
              {taglineCta}
            </Text>
            </Text>
        </View>

        <View style={styles.buttonContainer}>
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
        
     </View>
    )
}

export default CarItem
