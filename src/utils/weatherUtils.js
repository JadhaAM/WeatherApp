export const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };
  
  export const formatTemperature = (temp) => {
    return `${Math.round(temp)}°C`;
  };