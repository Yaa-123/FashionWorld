import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const mockCartItems = [
  {
    id: '1',
    name: 'Stylish Sunglasses',
    price: '$49.99',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Trendy Sneakers',
    price: '$89.99',
    image: 'https://via.placeholder.com/100',
  },
];

export default function CartScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={mockCartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
  image: { width: 60, height: 60, marginRight: 15, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'gray' },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutText: { color: '#fff', fontSize: 16 },
});
