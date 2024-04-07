// Using a function command for cities
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country, "!\n"));
}
//Calling the function for 3 cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York City", "USA");
