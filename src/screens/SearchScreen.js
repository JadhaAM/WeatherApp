import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const handleSearch = () => {
    if (city.trim()) {
      navigation.navigate('WeatherDetails', { city: city.trim() });
      setCity('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#666"
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={ handleSearch}
        >
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.favoritesButton}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.favoritesButtonText}>View Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginRight: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4a90e2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  favoritesButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  favoritesButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;