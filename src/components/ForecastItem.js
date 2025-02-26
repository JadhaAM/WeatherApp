import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from './WeatherIcon';
import { formatTime } from '../utils/dateUtils';

const ForecastItem = ({ time, temp, iconCode, description }) => (
  <View style={styles.container}>
    <Text style={styles.time}>{formatTime(time)}</Text>
    <WeatherIcon iconCode={iconCode} size={32} />
    <Text style={styles.temperature}>{Math.round(temp)}°C</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    minWidth: 80,
  },
  time: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  temperature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
});

export default ForecastItem;