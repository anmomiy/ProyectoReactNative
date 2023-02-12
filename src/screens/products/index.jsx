import { View, Text, Button, SafeAreaView, FlatList } from 'react-native';

import { styles } from './styles';
import { ProductItem } from '../../components';
import { PRODUCTS } from '../../constants'


const Products = ({ navigation, route }) => {
  const { categoryId, title } = route.params;


  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
        numColumns={2}
        horizontal={false}
      />
       </SafeAreaView>
  );
};

export default Products