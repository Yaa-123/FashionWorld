import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetail({ route }) {
  const { product } = route.params || {}; // Safe access

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No product data available.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>
        This is a beautiful {product.name.toLowerCase()} perfect for any occasion. Style it your way and turn heads!
      </Text>
      <Text style={styles.price}>$29.99</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
