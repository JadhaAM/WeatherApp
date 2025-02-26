import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWindDirection } from '../utils/weatherUtils';

const WeatherMetrics = ({ humidity, windSpeed, windDeg, pressure }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={styles.metric}>
        <Icon name="water-outline" size={24} color="#4a90e2" />
        <Text style={styles.metricText}>Humidity</Text>
        <Text style={styles.metricValue}>{humidity}%</Text>
      </View>
      
      <View style={styles.metric}>
        <Icon name="speedometer-outline" size={24} color="#4a90e2" />
        <Text style={styles.metricText}>Wind</Text>
        <Text style={styles.metricValue}>
          {windSpeed} m/s {getWindDirection(windDeg)}
        </Text>
      </View>
    </View>
    
    <View style={styles.row}>
      <View style={styles.metric}>
        <Icon name="thermometer-outline" size={24} color="#4a90e2" />
        <Text style={styles.metricText}>Pressure</Text>
        <Text style={styles.metricValue}>{pressure} hPa</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  metricText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
});

export default WeatherMetrics;