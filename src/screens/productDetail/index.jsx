import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { PRODUCTS } from '../../constants';
import { Card } from '../../components';

const ProductDetail = ({ navigation, route }) => {
  const { productId, title } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);


  return (
    <Card style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image style={styles.image} source={product.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.extra}>{product.extra}</Text>
      <Text style={styles.price}>S/{product.price}</Text>
    </Card>
  );
};

export default ProductDetail