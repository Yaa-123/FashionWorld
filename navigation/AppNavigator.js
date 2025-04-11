// navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProductDetail from '../screens/ProductDetail';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import UploadScreen from '../screens/UploadScreen';
import StyleScannerScreen from '../screens/StyleScannerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 🔁 Stack Navigator with all your app screens
const MainStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetail} />
    <Stack.Screen name="ProductDetailAlt" component={ProductDetailScreen} />
    <Stack.Screen name="Wishlist" component={WishlistScreen} />
    <Stack.Screen name="Upload" component={UploadScreen} />
    <Stack.Screen name="StyleScanner" component={StyleScannerScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Orders" component={OrderHistoryScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
  </Stack.Navigator>
);

// 🧭 Drawer Navigator with swipe enabled
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          gestureEnabled: true,
          swipeEdgeWidth: 100,
        }}
      >
        {/* 🏠 Wrap MainStack so all screens are available inside drawer flow */}
        <Drawer.Screen name="HomeStack" component={MainStack} options={{ title: 'Home' }} />
        <Drawer.Screen name="StyleScanner" component={StyleScannerScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        {/* You can add more drawer screens here if needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
