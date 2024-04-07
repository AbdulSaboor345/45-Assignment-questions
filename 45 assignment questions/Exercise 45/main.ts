
type car = { manufacturer: string;
model: string; [key: string]: any};

function createCar(manufacturer: string,model: string, ...options: [string, any][]): car{
    let car: car = { manufacturer,
    model};
    options.forEach(([key, value]) => {car[key] = value;})    
    return car;
}

// example usage:
let myCar = createCar("Toyota","Camry", ["color" , "red"], ["year",2022]);
console.log(myCar);