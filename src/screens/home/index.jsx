import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer }}
        onPress={()=> navigation.navigate('Categories')}>
          <Text style={styles.title}>Iniciar Compras</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;