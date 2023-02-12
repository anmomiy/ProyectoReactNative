import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Categories, Products, ProductDetail, Home } from '../screens/index'

const Stack = createNativeStackNavigator();

const ShopNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{
                    title:'Inicio'

                }}
            />
            <Stack.Screen 
                name='Categories' 
                component={Categories}
                options={{
                    title:'Categorías'

                }}
            />
            <Stack.Screen 
                name='Products' 
                component={Products}
                options={{
                    title:'Productos'

                }}
            />
            <Stack.Screen 
                name='ProductDetail' 
                component={ProductDetail}
                options={{
                    title:'Detalle del Producto'

                }}
            />
            
        </Stack.Navigator>
    )

}

export default ShopNavigator;