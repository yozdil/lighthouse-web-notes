# Functional Programming

## Array.prototype.filter()

filter() does not mutate the array on which it is called.

### Syntax
```javascript
let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
```

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

map does not mutate the array on which it is called (although callback, if invoked, may do so).

### Syntax
```javascript
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
```

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

## Array.prototype.reduce()
reduce does not mutate the original array.

### Syntax
```javascript
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
```

```javascript
const array = [1, 2, 3, 4, 5];

let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log( array.reduce(reducer) ); // 15
```
Or we can use Map's initial value property.

```javascript
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
  { amount: 500 },
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount); // 1575
```
See how after we use 0 as initial value after our function inside map.

### Flatten an array of arrays
```javascript
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
```