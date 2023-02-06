import React from 'react'
import { View, Text, Button } from 'react-native';
import {styles} from './styles'
import { colors } from '../../constants';

const Welcome = ({route, navigation}) => {
    const {userName} = route.params
    return(
        <View style={styles.container}>

            <Text style={styles.welcome}>Bienvenido, {JSON.stringify(userName)}</Text>
            <Button title="Volver" onPress={()=>navigation.navigate('Iniciar Sesión')} color={colors.secondary} />
        </View>
    )



}

export default Welcome;