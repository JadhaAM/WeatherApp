import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import WeatherDetailsScreen from '../screens/WeatherDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;