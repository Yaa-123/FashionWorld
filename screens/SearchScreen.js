// screens/SearchScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const mockProducts = [
  { id: '1', name: 'Red Dress', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Red+Dress' },
  { id: '2', name: 'Denim Jacket', image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Jacket' },
  { id: '3', name: 'White Sneakers', image: 'https://via.placeholder.com/150/FFFFFF/000000?text=Sneakers' },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');

  const filteredProducts = mockProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for products..."
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 6,
  },
});
