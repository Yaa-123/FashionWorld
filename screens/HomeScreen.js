import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ RIGHT // Menu icon
import styleScannerImg from '../assets/styleScanner.png';
import searchButtonImg from '../assets/searchButton.png';

const HomeScreen = ({ navigation }) => {
  const categories = ['Tops', 'Bottoms', 'Accessories', 'Shoes'];
  const products = [
    {
      id: '1',
      name: 'Red Dress',
      price: '$49.99',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Red+Dress',
    },
    {
      id: '2',
      name: 'Denim Jacket',
      price: '$89.99',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Jacket',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* ☰ Drawer Menu Icon */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* 💄 Welcome Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Slay Every Look, Every Day</Text>
        <Text style={styles.bannerSubtitle}>
          Your favourite stylist is here – scan, style and stun the world
        </Text>
      </View>

      {/* 🔍 Scanner & Search Buttons */}
      <View style={styles.iconButtonsRow}>
        <TouchableOpacity onPress={() => navigation.navigate('StyleScanner')}>
          <Image source={styleScannerImg} style={styles.iconButtonImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={searchButtonImg} style={styles.iconButtonImage} />
        </TouchableOpacity>
      </View>

      {/* 🧵 Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Category', { category: cat })}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 🛍️ Product List */}
      <Text style={styles.sectionTitle}>Popular Products</Text>
      <View style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  banner: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#ccc',
  },
  iconButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  iconButtonImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  categoryItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontWeight: '600',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 6,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  productPrice: {
    color: '#666',
    fontSize: 13,
  },
});

export default HomeScreen;
