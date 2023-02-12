import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';

import { styles } from './styles';

const CartItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <View>
            <Text style={styles.title}>{item.title}</Text> 
            <Text style={styles.price}>S/{item.price}</Text>
        </View>
        <Ionicons
              name={'md-trash-outline'}
              size={28}
              color={colors.black}
            />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;