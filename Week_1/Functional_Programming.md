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
let isDog = animal => animal.species === 'dog';

console.log(animals.filter(isDog));
console.log(animals.reject(isDog))

```
RESULT
[
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' }
]