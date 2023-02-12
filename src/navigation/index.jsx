import { NavigationContainer } from "@react-navigation/native";
import LogInNavigator from "./login";
import ShopNavigator from "./shop";
import Tabs from "./tabs";

const AppNavigator = () =>{
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}

export default AppNavigator;