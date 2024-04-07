// Using function command for country and city
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// Calling the function 3 times and printing the returned value
city_country("Karachi", "Pakistan");
console.log(city_country("\nKarachi", "Pakistan\n"));
city_country("Tokyo", "Japan");
console.log(city_country("\nTokyo", "Japan\n"));
city_country("Melbourne", "Australia");
console.log(city_country("\nMelbourne", "Australia\n"));
