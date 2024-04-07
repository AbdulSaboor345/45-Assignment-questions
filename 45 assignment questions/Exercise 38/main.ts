
// Using a function command for cities

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`\n${city} is in ${country}!\n`);
}
//Calling the function for 3 cities

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York City" , "USA");