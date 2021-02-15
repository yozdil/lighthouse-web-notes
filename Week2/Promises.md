# Promises

## Syntax
```javascript
// promise syntax look like this
new Promise((resolve, reject) => { ... } );
```

## Creating a Promise

A new Promise takes in a callback with two parameters (a function if the case is resolved and a function if the case is rejected).
Here, "mother is happy" means the asynchronous call is successful, and "mother is not happy" means that it fails.

That is a promise. **A promise has 3 states.** They are:

1. **Pending:** You don’t know if you will get that phone
2. **Fulfilled:** Mom is happy, she buys you a brand new phone
3. **Rejected:** Mom is unhappy, she doesn’t buy you a phone

```javascript
let isMomHappy = true;

//Promise
const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: "iPhone X",
      color: "gray",
    };
    resolve(phone); //fulfilled
  } else {
    let reason = new Error("Mom is angry.");
    reject(reason); //reject
  }
});
```

## Chaining Promises

Let’s chain the promises. You, the kid can **only start** the ```showOff``` promise after the ```willIGetNewPhone``` promise.

```javascript
const showNewPhone = function(phone) {
  let message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + ".";
  return Promise.resolve(message);
};
```


## Calling (Consuming) the Promise

```javascript
// call our promise
const askMom = () => {
  console.log("before asking Mom"); // log before
  willGetNewPhone //if this was a function we could () invoke.
    .then(showNewPhone)
    .then((fulfilled) => {
      //yay, you got a new phone
      console.log(fulfilled);
      //output: 'Hey friend, I have a new gray iPhone X.'
    })
    .catch((error) => {
      //oops, mom don't buy it
      console.log(error.message);
      //output: 'Mom is angry.'
    });
  console.log("after asking mom"); // log after
};

askMom();
```
The output sequence of this program will be:
1. before asking Mom
2. after asking mom
3. Hey friend, I have a new black Samsung phone.