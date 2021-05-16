import React from 'react'
import {View, FlatList, Dimensions} from 'react-native'
import CarItem from '../carItem'
import styles from './styles'


import cars from './cars'


const CarsList = () => {
    return (
        <View style={styles.component}>
            <FlatList
                data={cars}
                renderItem={({item})=> <CarItem
                    name={item.name}
                    tagline={item.tagline}
                    taglineCta = {item.taglineCTA}
                    image={item.image}
                /> 
                }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
             />
             
        </View>
    )
}

export default CarsList
