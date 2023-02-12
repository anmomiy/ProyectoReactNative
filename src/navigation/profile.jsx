import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileTab } from '../screens/index'

const Stack = createNativeStackNavigator();

const ProfileNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='ProfileTab'>
            <Stack.Screen 
                name='ProfileTab' 
                component={ProfileTab}
                options={{
                    title:'Mi perfil'

                }}
            />
        </Stack.Navigator>
    )

}

export default ProfileNavigator;