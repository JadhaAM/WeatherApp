import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const weatherIcons = {
  '01d': 'sunny',
  '01n': 'moon',
  '02d': 'partly-sunny',
  '02n': 'cloudy-night',
  '03d': 'cloud',
  '03n': 'cloud',
  '04d': 'cloudy',
  '04n': 'cloudy',
  '09d': 'rainy',
  '09n': 'rainy',
  '10d': 'rainy',
  '10n': 'rainy',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'water',
  '50n': 'water',
};

const WeatherIcon = ({ iconCode, size = 48, color = '#4a90e2' }) => {
  const iconName = weatherIcons[iconCode] || 'help-outline';
  return (
    <View style={styles.container}>
      <Icon name={`${iconName}-outline`} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeatherIcon;