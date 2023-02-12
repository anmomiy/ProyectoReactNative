import { View, Text, Button, SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { CartItem } from '../../components';
import { CART } from '../../constants'


const Cart = ({ navigation, route }) => {
  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <CartItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
       </SafeAreaView>
  );
};

export default Cart