import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { getWeatherByCity } from '../services/weatherService';
import { addToFavorites } from '../services/storageService';
import Icon from 'react-native-vector-icons/Ionicons';
import WeatherIcon from '../components/WeatherIcon';
import WeatherMetrics from '../components/WeatherMetrics';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { formatDate } from '../utils/dateUtils';

const WeatherDetailsScreen = ({ route, navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { city } = route.params;

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    console.log('Attempting to fetch weather for:', city);
    try {
      const data = await getWeatherByCity(city);
      console.log('Weather data received:', data);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      await addToFavorites(city);
      Alert.alert('Success', 'City added to favorites!');
    } catch (err) {
      Alert.alert('Error', 'Failed to add city to favorites');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchWeatherData} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.weatherCard}>
        <Text style={styles.cityName}>{weatherData.name}</Text>
        <Text style={styles.date}>{formatDate(weatherData.dt)}</Text>
        
        <WeatherIcon 
          iconCode={weatherData.weather[0].icon}
          size={64}
        />
        
        <Text style={styles.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </Text>
        
        <Text style={styles.description}>
          {weatherData.weather[0].description}
        </Text>
        
        <WeatherMetrics
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          windDeg={weatherData.wind.deg}
          pressure={weatherData.main.pressure}
        />
  
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleAddToFavorites}
        >
          <Icon name="heart-outline" size={24} color="#fff" />
          <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4a90e2',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    textTransform: 'capitalize',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  favoriteButton: {
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WeatherDetailsScreen;