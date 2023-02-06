import { NavigationContainer } from "@react-navigation/native";
import LogInNavigator from "./login";

const AppNavigator = () =>{
    return (
        <NavigationContainer>
            <LogInNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator;