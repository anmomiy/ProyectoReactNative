
import { ActivityIndicator, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font'
import { Header } from './components';
import { LogIn, Welcome } from './screens';
import colors from './constants/themes/colors';

const App = () => {
 const [loaded] = useFonts({
    'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('../assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('../assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('../assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-MediumItalic': require('../assets/fonts/Nunito-MediumItalic.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('../assets/fonts/Nunito-SemiBoldItalic.ttf'),
  });

  const [userName, setUserName] = useState('');

  const onHandleLog = (selectedName) => {
    setUserName(selectedName);
  };



  const Content = () => {
    if (userName !== ''){
      return <Welcome name={userName}/>
    }
    return <LogIn onHandleLog={onHandleLog} />

  };


if (!loaded){
  return(
    <View>
      <ActivityIndicator size='large' color={colors.primary}/>
    </View>
  )
}

return(
  <View>
    <Header title='Mi App'/>
    <Content />
  </View>
)
}


export default App;
