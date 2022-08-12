// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
}
// To call the function we simply type the name of the function followed by()
sayHello();


function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}
// To call the function we simply type the name of the function followed by()
sayHelloToIsabel();

function sayHelloToSandra() {
    console.log("Hello, Sandra!");
}
function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}
function sayHelloToMark() {
    console.log("Hello, Mark!");
}

sayHelloToSandra();
sayHelloToBrendan();
sayHelloToMark();


// Understanding arguments and parameters
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");// passing the argument 'anything' into our function

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); 
  sayHelloTo("Jane"); 
  sayHelloTo("R2-D2"); 
  sayHelloTo(1); 
  
  //  Note that in the above, JavaScript coerces the number 1 to the string "1"
  
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye","Julio")
  say("Julio","Hello")

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio","Hello")


//   Returning values in javascript
function add(x,y) {
    return x + y;
  }
  console.log(add(1, 2));
  add(1,2)

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello","Sandra"));