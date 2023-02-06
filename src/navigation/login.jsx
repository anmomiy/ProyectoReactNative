import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogIn, Register, Welcome } from '../screens/index'

const Stack = createNativeStackNavigator();

const LogInNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='LogIn'>
            <Stack.Screen 
                name='Iniciar Sesión' 
                component={LogIn}
                options={{


                }}
            />
            <Stack.Screen 
                name='Regístrate' 
                component={ Register}
                options={{


                }}
            />
            <Stack.Screen 
                name='Inicio' 
                component={ Welcome}
                options={{


                }}
            />
        </Stack.Navigator>
    )

}

export default LogInNavigator;