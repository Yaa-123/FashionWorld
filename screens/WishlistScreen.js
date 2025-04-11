import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const WishlistScreen = ({ navigation }) => {
  const wishlistItems = [
    {
      id: '1',
      name: 'Black Heels',
      price: '$59.99',
      image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Heels',
    },
    {
      id: '2',
      name: 'Gold Earrings',
      price: '$29.99',
      image: 'https://via.placeholder.com/150/FFD700/000000?text=Earrings',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
      >
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wishlist</Text>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WishlistScreen;
