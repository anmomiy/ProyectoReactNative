import React, {useState} from 'react'
import { View, Text } from 'react-native';
import {styles} from './styles'

const Welcome = ({name}) => {

    return(
        <View style={styles.container}>

            <Text style={styles.welcome}>Bienvenido, {name}</Text>

        </View>
    )



}

export default Welcome;