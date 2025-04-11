// screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [accountType, setAccountType] = useState(null); // 'seller' or 'buyer'

  const handleRegister = () => {
    if (!name || !email || !password || !dob || !country || !city || !phone || !accountType) {
      Alert.alert('Incomplete Details', 'Please fill all fields and choose an account type.');
      return;
    }

    // Handle registration logic here (API/storage/etc)
    Alert.alert('Success', `Registered as ${accountType === 'seller' ? 'Looksmith/Seller' : 'Look Lover/Buyer'}!`);
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={dob}
        onChangeText={setDob}
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Select Account Type:</Text>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, accountType === 'seller' && styles.activeButton]}
          onPress={() => setAccountType('seller')}
        >
          <Text style={styles.switchText}>Looksmith / Seller</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.switchButton, accountType === 'buyer' && styles.activeButton]}
          onPress={() => setAccountType('buyer')}
        >
          <Text style={styles.switchText}>Look Lover / Buyer</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  label: { fontWeight: '600', marginBottom: 10 },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#f1f1f1',
  },
  activeButton: {
    backgroundColor: '#000',
  },
  switchText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  registerButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  linkText: {
    marginTop: 20,
    color: '#007AFF',
    textAlign: 'center',
  },
});
