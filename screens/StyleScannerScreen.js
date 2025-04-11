// screens/StyleScannerScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function StyleScannerScreen() {
  const [imageUri, setImageUri] = useState(null);

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Access Permission',
          message: 'We need access to your gallery to select images.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      return Alert.alert('Permission Denied', 'We need access to your gallery.');
    }

    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const takePhoto = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'We need access to your camera to take pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      return Alert.alert('Permission Denied', 'Camera access is needed.');
    }

    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload or Scan Your Look</Text>
      <Button title="Pick from Gallery" onPress={pickImage} />
      <Button title="Take a Photo" onPress={takePhoto} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 300, height: 300, marginTop: 20, borderRadius: 16 },
});
