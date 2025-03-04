// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

function sayHelloToLiz() {
    console.log("Hello, Liz!");
   }

function sayHelloToSamip() {
    console.log("Hello, Samip!");
    }
sayHelloToSamip();
sayHelloToGuadalupe();
sayHelloToLiz();

function doSomething(thing) {
    console.log(thing);
  }

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log("Hello", "Odhiambo")
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  function say(greeting, firstName) {
    console.log("greeting:", greeting);
    console.log("firstName:", firstName);
    console.log(`${greeting}, ${firstName}!`);
  }
 say("Hello", "Julio");

 function add(x, y) {
    return x + y;
  }

  console.log(add(9000, 80));

  