# Functional Programming

## Array.prototype.filter()

Consider the following array containing objects.

```javascript
let animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];
```

```javascript
//  Using filter to push values into an array.
let dogs = [];

animals.filter((animal) => {
  if (animal.species === "dog") {
    dogs.push(animal);
  }
});

console.log(dogs);
```

RESULT
[
{ name: 'Caro', species: 'dog' },
{ name: 'Hamilton', species: 'dog' }
]

```javascript
// Creating a function variable and passing into the filter
let isDog = (animal) => animal.species === "dog";

console.log(animals.filter(isDog));
console.log(animals.reject(isDog));
```

RESULT
[
{ name: 'Caro', species: 'dog' },
{ name: 'Hamilton', species: 'dog' }
]

## Array.prototype.map()

Considering the same animals array, look what map does.

```javascript
let names = animals.map((animal) => {
  return animal.name + " is a " + animal.species;
});
```

Or if we even write it shorter

```javascript
let names = animals.map((animal) => animal.name + " is a " + animal.species);
```

RESULT
[
'Fluffykins is a rabbit',
'Caro is a dog',
'Hamilton is a dog',
'Harold is a fish',
'Ursula is a cat',
'Jimmy is a fish'
]
