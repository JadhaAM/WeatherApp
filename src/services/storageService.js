import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@weather_favorites';

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const addToFavorites = async (city) => {
  try {
    const favorites = await getFavorites();
    if (!favorites.includes(city)) {
      const newFavorites = [...favorites, city];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};