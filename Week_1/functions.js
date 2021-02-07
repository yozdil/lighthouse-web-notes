let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

//  Using filter to push values into an array.
let dogs = [];

animals.filter((animal) => {
  if (animal.species === "dog") {
    dogs.push(animal);
  }
});

console.log(dogs);

// Creating a function variable and passing into the filter

let isDog = animal => animal.species === 'dog';

console.log(animals.filter(isDog));
console.log(animals.reject(isDog))