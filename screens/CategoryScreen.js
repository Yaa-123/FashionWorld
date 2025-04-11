import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sampleProducts = {
  Tops: [
    {
      id: '1',
      name: 'Crop Top',
      price: '$19.99',
      image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Crop+Top',
    },
    {
      id: '2',
      name: 'Blouse',
      price: '$29.99',
      image: 'https://via.placeholder.com/150/FF69B4/000000?text=Blouse',
    },
  ],
  Bottoms: [
    {
      id: '3',
      name: 'Jeans',
      price: '$39.99',
      image: 'https://via.placeholder.com/150/87CEFA/000000?text=Jeans',
    },
    {
      id: '4',
      name: 'Skirt',
      price: '$24.99',
      image: 'https://via.placeholder.com/150/FFA07A/000000?text=Skirt',
    },
  ],
  Accessories: [
    {
      id: '5',
      name: 'Earrings',
      price: '$9.99',
      image: 'https://via.placeholder.com/150/DA70D6/000000?text=Earrings',
    },
  ],
  Shoes: [
    {
      id: '6',
      name: 'Heels',
      price: '$59.99',
      image: 'https://via.placeholder.com/150/D8BFD8/000000?text=Heels',
    },
  ],
};

const CategoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;
  const products = sampleProducts[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  productCard: {
    width: '48%',
    margin: '1%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontWeight: '600',
    fontSize: 14,
  },
  productPrice: {
    color: '#555',
    fontSize: 13,
  },
});
