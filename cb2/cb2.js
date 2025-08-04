const greetingWithWeather = (name, weather) => {
  if (weather === "sunny") {
    return `Chao ${name}, hom nay troi nang tuyet voi!`;
  } else if (weather === "rainy") {
    return `Chao ${name}, hom nay troi mua hay mang theo o!`;
  } else {
    return `Chao ${name}, hom nay thoi tiet khong xac dinh!`;
  }
};

console.log(greetingWithWeather("An", "sunny"));
console.log(greetingWithWeather("An", "rainy"));
console.log(greetingWithWeather("An", "cloudy"));
